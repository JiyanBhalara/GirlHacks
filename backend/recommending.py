import os
import PyPDF2
from io import BytesIO
import openai
from dotenv import load_dotenv
load_dotenv(dotenv_path="./keys.env")

client = openai.Client(
    # This is the default and can be omitted
    api_key=os.environ.get("OPENAI_API_KEY"),
)


# Function to interact with GPT for analyzing resume and job description
def analyze_resume_and_job_description(resume_text, job_description_text):
    # Prompt for GPT
    prompt = f"""
    Analyze the following resume and job description. 

    1. Give an ATS (Applicant Tracking System) score for the resume based on how well it matches the job description.
    2. Provide a skill gap analysis. Identify the key skills missing in the resume that are required in the job description.
    3. Suggest specific improvements to enhance the resume to better fit the job.
    4. Offer general suggestions for increasing the applicant's chances of success.

    Resume: 
    {resume_text}

    Job Description:
    {job_description_text}
    """

    # Call to OpenAI API (replace 'your-api-key' with your actual OpenAI API key)
    response = client.chat.completions.create(
        model="gpt-4",  # Specify the model you want to use
        messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": prompt}
        ],
        max_tokens=1000,  # You can adjust the token count based on your needs
        temperature=0.7,  # Controls the creativity of the response
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    recommendation = response.choices[0].message.content

    # Extracting the response text
    return recommendation


def extract_text_from_pdf(file_content):
    # Ensure the file_content is in bytes
    if isinstance(file_content, str):
        file_content = file_content.encode()  # Convert str to bytes if needed

    try:
        # Use BytesIO to handle the file content directly
        pdf_reader = PyPDF2.PdfReader(BytesIO(file_content))  # Correct usage of file content
        text = ""

        # Extract text from all pages
        for page in pdf_reader.pages:
            text += page.extract_text()

        return text.strip()
    except PyPDF2.errors.PdfReadError:
        return "Error: Could not read the PDF file. The file may be corrupted or incomplete."
    except Exception as e:
        return f"Error: {str(e)}"


# Example usage

def process_pdfs(resume_file_content, job_description_file_content):
    # Extract text from the resume PDF content
    resume_text = extract_text_from_pdf(resume_file_content)

    # Extract text from the job description PDF content
    job_description_text = extract_text_from_pdf(job_description_file_content)

    # Analyze resume and job description and generate recommendations
    if resume_text and job_description_text:
        data = analyze_resume_and_job_description(resume_text, job_description_text)
        recommendations = data.split("\n")
        return recommendations
    else:
        return None


import openai
import os

# Make sure your API key is correctly configured
openai.api_key = os.getenv('OPENAI_API_KEY')

try:
    response = openai.ChatCompletion.create(
        model="gpt-3.5-turbo",  # or another appropriate model
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "Translate 'Hello, how are you?' into French."}
        ]
    )
    print(response)
except Exception as e:
    print("An error occurred:", e)

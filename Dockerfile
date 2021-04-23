FROM python:3
ENV PYTHONUNBUFFERED=1
WORKDIR /backend
COPY backend/requirements.txt /backend/
RUN pip install -r requirements.txt
COPY . /backend/

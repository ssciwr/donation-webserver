FROM python
WORKDIR /app

COPY ./src/app /app
COPY ./requirements.txt /app

RUN pip install --upgrade pip
RUN pip install -r requirements.txt
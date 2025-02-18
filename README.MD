[![Build Status](https://app.travis-ci.com/FaisalAldarees/Workshop-02-CS392-04-171.svg?branch=main)](https://app.travis-ci.com/FaisalAldarees/Workshop-02-CS392-04-171)

# Food Machine Learning tool

Food Machine Learning tool is a web-based machine learning system for simple text classification.
<br>

# Requirements

- The Food Machine Learning tool requires [npm](https://www.npmjs.com/) & [Node.js](https://nodejs.org/en/) packages in order to run the tool.<br>
To install npm & node.js and set it up: [npm & node.js installation](https://docs.npmjs.com/getting-started).<br>
- It also requires a software platform that it can runs on, which is [Docker](https://www.docker.com/) in our case.<br>
To install Docker and set it up: [Docker installation](https://docs.docker.com/desktop/).<br>

- It also requires `docker compose` to run the docker image.<br>
To install docker compose and set it up: [Docker compose](https://docs.docker.com/compose/install/)
<br>

# Setup

To build the image:
```Bash
$ docker-compose build [OPTIONS] PATH | URL | -
```
<pre>
Options:
    --no-cache              Do not use cache when building the image.
    -q, --quiet             Don't print anything to `STDOUT`.
</pre>
___
To start running the container:
```Bash
$ docker-compose up -d
```
<pre>
-d, --detach               Detached mode: Run containers in the background,
                               print new container names. Incompatible with
                               --abort-on-container-exit.
</pre>
___
To stop the running container:
```Bash
$ docker-compose kill
```
___
To stop the container and remove the builded image:
```Bash
$ docker-compose down
```
<br>

# Usage
To start using the tool, open any browser on your running machine and type `localhost:8000` in the url field. An input field should be showen and two buttons submit and clear, if your input text in the text field is related to food, then a lable should be showen in front of the input text in a box just bellow the text field.
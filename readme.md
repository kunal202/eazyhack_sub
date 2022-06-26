<h1>What the hell is this right?</h1>

<h4>Think of this as a basic logger system (like Grafana) where any request coming to the publisher will be sent to the subscriber with the request body</h4>

Tech stack

- Node
- Redis
- MongoDb

To Try it out:-

Clone this repo
<br><br>
RUN `npm i` and if you have docker installed on your system then run a docker image of redis, here the broker is redis, also do make sure the subscriber and the [publisher](https://github.com/kunal202/easyhack_pub) should run on the same redis port, also make sure the monodb is also running

run `node app`


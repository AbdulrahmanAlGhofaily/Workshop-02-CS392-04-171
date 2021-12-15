const express = require("express");
const fastText = require("fasttext");
const cors = require("cors");

// Express app
const app = express();

// register view engine
app.set('view engine', 'ejs');

app.use(cors());
app.use('/public',express.static('public'));

const result = [];
let falseInput = false;
let config = {
  dim: 100,
  input: "train.txt",
  output: "model",
  bucket: 2000000,
  loss: "softmax",
};
let classifier = new fastText.Classifier();

classifier.train("supervised", config).then((res) => {
  console.log(res);
});

app.get("/", (req, res) => {
  // Render ejs file and export result array to it.
  res.render("index", {result, falseInput});
});

app.get("/fasttext/", function (req, res) {
  var statement = req.param("inputField");
  getFastTextResults(statement);
  res.redirect('/');
});

/**
 * Classify a given string
 * @param {string} statement 
 */

function getFastTextResults(statement) {
  //predict returns an array with the input and predictions for best cateogires
  classifier
    .predict(statement, 3)
    .then((res) => {
      falseInput = false;
      console.log(res);
      // return the index of the maximum value in res array
      const maxValue = res.map((el)=>el.value).reduce((maxIndex, currEl, i, arr)=> currEl > arr[maxIndex] ? i : maxIndex, 0);

      // return maximum value label
      const labelName = res[maxValue].label.split("__")[2];

      // push the maximum value and it's label to the result array
      result.push({value:statement, label:labelName});
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
      falseInput = true;
    });
}

app.listen(8000, () => {
  console.log("Listening on port 8000!");
});

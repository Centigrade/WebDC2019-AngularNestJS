import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as express from 'express';
import {
  SAMPLE_COMPANIONS as companionsNearYou,
  SAMPLE_COMPANIONS_DETAILS as allCompanions,
} from './data/sample-companions';

const app = express();

app.use(cors());
app.use(bodyParser());

app.get('/companions', function(_, res) {
  // Get companions somewhere from a DB or the like.
  // Do some magic...
  res.send(companionsNearYou);
});

app.get('/companion/:id', function(req, res) {
  const id = req.params['id'];
  const details = allCompanions.find(companion => companion.id === id);
  res.send(details);
});

app.post('/contact', function(req, res) {
  const { myId, contactId } = req.body;
  console.log(`Companion '${myId}' says hello to '${contactId}'.`);
  res.status(200);
});

app.listen(3000, function() {
  console.log('ngCompanions backend listening on port 3000!');
});

import * as express from 'express';
import { SAMPLE_COMPANIONS as allCompanions } from './data/sample-companions';

const app = express();

app.get('/companions', function(_, res) {
  // Get companions somewhere from a DB or the like.
  // Do some magic...
  res.send(allCompanions);
});

// TODO: Implement GET route for /companion/:id

// TODO: Implement POST route for /contact

app.listen(3000, function() {
  console.log('ngCompanions backend listening on port 3000!');
});

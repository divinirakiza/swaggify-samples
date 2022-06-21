import { Swaggify } from 'swaggiffy';
import { Schema } from 'swaggiffy';

const express = require('express');
const app = express();

app.listen(5008, () => {
    console.log('Server is running 2');
});

app.get('/', (req: any, res: any) => {
    return res.send('Server is running');
});

new Swaggify().setupExpress(app).swaggify();

@Schema()
class Test {
    firstName: string = 'DIvin';
}
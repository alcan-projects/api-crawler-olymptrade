import { config } from 'dotenv';
config()
import app from './app';
import Env from './config/env';

app.listen(Env.port, () => {
    console.log(`Start server in port ${Env.header}://${Env.host}:${Env.port}`)
})
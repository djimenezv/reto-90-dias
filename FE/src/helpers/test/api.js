import {rest} from 'msw'
import {setupServer} from 'msw/node'
import { CONFIG_VARS } from '../../config';

export const getProfileEndPoints = () => setupServer(
    rest.get(`${CONFIG_VARS.API_URL}/me`, (req, res, ctx) => {
      return res(ctx.json({
        displayName: "user1",
        email: "user1@gmail.com",
        picture: "https://user1picture"
      }))
    }),
  );


import jwt, { Secret } from 'jsonwebtoken';

export interface UserPayload {
    email: string;
}

export const signIn = (email: string, password: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        if (process.env.JWT_KEY) {
            const secretKey: Secret = process.env.JWT_KEY;
            const userPayload: UserPayload = { email };

            jwt.sign(userPayload, secretKey, {}, function (err, token) {
                if (!err) {
                    resolve(token);
                } else {
                    console.log('paila');
                    reject(err);
                }
            });
        } else {
            reject("secret key doesn't exist");
        }
    });
};

export const validate = (token: string): Promise<UserPayload> => {
    return new Promise((resolve, reject) => {
        if (process.env.JWT_KEY) {
            const secretKey: Secret = process.env.JWT_KEY;
            jwt.verify(token, secretKey, function (err, payload) {
                if (!err && payload) {
                    const result: UserPayload = <UserPayload>payload;
                    resolve(result);
                } else {
                    reject(err);
                }
            });
        } else {
            reject("secret key doesn't exist");
        }
    });
};

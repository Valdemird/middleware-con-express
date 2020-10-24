export interface User {
    id: string;
    email: string;
    username: string;
    age: number;
    emailProvider: string;
}

const MockUsers: User[] = [
    {
        id: '1',
        email: 'fulanito@gmail.com',
        username: 'fulanito',
        age: 21,
        emailProvider: 'gmail.com',
    },
    {
        id: '2',
        email: 'pablo@gmail.com',
        username: 'pablo',
        age: 25,
        emailProvider: 'gmail.com',
    },
    {
        id: '3',
        email: 'arturo@gmail.com',
        username: 'arturo',
        age: 18,
        emailProvider: 'gmail.com',
    },
];

export const getUserByEmail = (email: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        try {
            const [username, emailProvider] = email.split('@');
            const user: User = {
                id: '1',
                email: email,
                username: username,
                age: 21,
                emailProvider: emailProvider,
            };
            resolve(user);
        } catch (error) {
            reject(error);
        }
    });
};

export const getUserById = (id: string): Promise<User> => {
    return new Promise((resolve, reject) => {
        try {
            resolve(MockUsers.find((user: User) => user.id === id));
        } catch (error) {
            reject(error);
        }
    });
};

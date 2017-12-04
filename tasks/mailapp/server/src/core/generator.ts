import { range, random } from 'lodash';
import * as faker from 'faker';
import { User } from './models/user';

interface IGenerator {
    getUser(): User;
    getContent(): string;
    getTitle(): string;
    getDate(): Date;
}

export const generator = (): IGenerator => {

    const users: User[] = range(0, 10).map(() => {
        return {
            name: faker.name.firstName(),
            avatar: faker.image.avatar()
        };
    })


    return {
        getUser() {
            return users[random(0, users.length - 1)];
        },
        getContent() {
            return faker.lorem.paragraph(6);
        },
        getTitle() {
            return faker.lorem.words(3);
        },
        getDate() {
            return faker.date.past();
        }
    }
};
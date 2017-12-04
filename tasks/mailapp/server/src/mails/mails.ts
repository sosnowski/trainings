import { range, random } from 'lodash';
import { generator } from '../core/generator';
import { Mail } from '../core/models/mail';


interface MailsCollection {
    get(): Mail[];
    getById(id: number): Mail | null;
    autoAdd(number?: number): void;
    add(msg: Mail) : Mail;
};



export const mails = (): MailsCollection => {
    const dataGenerator = generator();
    let data: Mail[] = [];
    
    return {
        get() {
            return data;
        },
        getById(id: number) {
            return data.find((record: Mail) => {
                return record.id === id;
            }) || null;
        },
        autoAdd(number?: number) {
            const newRecords: Mail[] = range(0, number ? number : random(1, 3)).map(() => {
                const user = dataGenerator.getUser();
                return {
                    id: Date.now(),
                    userName: user.name,
                    userAvatar: user.avatar,
                    title: dataGenerator.getTitle(),
                    content: dataGenerator.getContent(),
                    created: dataGenerator.getDate()
                };
            });
            data = [...data, ...newRecords];
        },
        add(mail: Mail) {
            mail.id = Date.now();
            data = [...data, mail];
            return mail;
        }
    };
}
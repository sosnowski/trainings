import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Mail } from '../models/mail';
import { MailForm } from '../models/mail-form';

@Injectable()
export class MailsService {

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Mail[]> {
        return this.http.get<Mail[]>('/api/mails');
    }

    getById(id: number) {
        return this.http.get<Mail>(`/api/mails/${id}`);
    }
    
    save(content: MailForm) {
        return this.http.post('/api/mails', content);
    }
}
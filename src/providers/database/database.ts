import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import {Injectable} from "@angular/core";
import {Platform} from "ionic-angular";

@Injectable()
export class DatabaseProvider {
    database: SQLiteObject;

    constructor(private sqlite: SQLite, private platform: Platform){
        this.platform.ready().then(() => {
            this.sqlite.create({
                name: 'dawn.db',
                location: 'default'
            }).then((db: SQLiteObject) => {
                this.database = db;
            }).catch(e => console.error(JSON.stringify(e)));
        });
    }

    connection() {
        return this.database;
    }
}
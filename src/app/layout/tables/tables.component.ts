import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { UserService } from '../../services/user.service';
import { User } from 'src/app/models/user';
import { NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()],
    providers: [UserService],
})
export class TablesComponent implements OnInit {

    private users: any;
    closeResult: string;

    constructor(private userService: UserService, private modalService: NgbModal) { }

    ngOnInit() {
        this.getUser();
    }

    getUser() {
        this.userService.getUser().subscribe(res => {
            this.users = res;
        })
    }

    deleteUser(user) {
        this.userService.deleteUser(user).subscribe(res => {
            console.log(res);
        })
    }

    addUser(form: NgForm) {
        console.log('formulario', form.value);
        this.userService.postUser(form.value).subscribe(res => {
            console.log('this is the res', res);
        });
        setTimeout(() => {

        }, 100);
    }

    open(content) {
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
}

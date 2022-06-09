import { auth } from "../util/FirebaseConnection";
import { deleteUser, sendPasswordResetEmail, updatePassword, User } from "firebase/auth";

export const changePassword = (newPassword: string) => {
    const appAuth = auth;
    const user = appAuth.currentUser;

    if(user && newPassword){
        updatePassword(user, newPassword).then(() => {
            return 1;
        }).catch((e) => {
            console.error(e.code);
            return 0;
        })
    } else {
        return 0;
    }
}

export const removeUser = () => {

}

export const forgotPassword = () => {

}
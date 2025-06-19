//.js file containing any auth services functions (Logging in and out)

import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase'

const submitSignOut = async () => {
    try{
        await signOut( auth );
    } catch (err) {
        alert("Signing out Error", err);
    }
};

export { submitSignOut };
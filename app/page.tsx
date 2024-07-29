// Suggested code may be subject to a license. Learn more: ~LicenseLog:3787628164.

import { User } from "../components/User";
import { Hind_Vadodara } from "next/font/google";

const hind_vadodara = Hind_Vadodara({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
    variable: "--font-hind-vadodara"
});

async function getUsers(){
    const users = await getDocs(collection(db,'users'));
    return users.docs.map((doc) => ({ slug: doc.id, ...doc.data()})) ;
}

export default function UsersPage(){
   

    return(
        <main className="${hind_vadodara.className}">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
            <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Your Beneficiaries</h1>
            <User />
            </div>
        </main>
    );
}
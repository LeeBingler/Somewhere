import { redirect } from "next/navigation";

export default function FirstPage() {
    redirect('/home');
    return <div>First Page</div>;
}

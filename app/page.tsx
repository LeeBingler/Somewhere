import { redirect } from "next/navigation";

export default function FirstPage() {
    redirect('/films');

    return <div>You should not be here</div>;
}

import MainHeader from "../components/mainHeader";
import MainFooter from "../components/main-footer";
import Error404Content from "../components/error-404-content";

export default function ErrorPage() {
    return (
        <>
            <MainHeader/>
            <main>
                <Error404Content/>
            </main>
            <MainFooter/>
        </>
    );
}
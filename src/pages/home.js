import Banner from "../components/banner";
import NewsList from "../components/newList";
import menu  from "../components/listMenu";
import footer from "../components/footer";
import NewsList2 from "../components/newList2";
const HomePage = {
    print() {
        return /* html */`
            <div class="menu">
            ${menu.print()}
            </div>
            <div class="banner">
                ${Banner.print()}
            </div>
            <div class="news">
                ${NewsList2.print()}
            </div>
            <div class="news py-3">
                ${NewsList.print()}
            </div>
            </div class="footer">
                ${footer.print()}
            </div>
        `;
    },
};
export default HomePage;
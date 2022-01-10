import data from "../data";

const NewsList = {
    print() {
        return `
        <h2 class="text-2xl font-semibold uppercase my-4">Tin tức học tập</h2>
        <div class="grid grid-cols-3 gap-8 m-auto">
            ${data.map((post) => `
                <div class="border px-4 py-3">
                    <a href="">
                        <img src="${post.img}" alt="" />
                    </a>
                    <h3 class="my-3 text-center"><a href="#" class="text-xl font-semibold text-orange-500">${post.title}</a></h3>
                    <p>${post.desc}</p>
                </div>
            `).join("")}
        </div>
        
        `;
    },
};
export default NewsList;
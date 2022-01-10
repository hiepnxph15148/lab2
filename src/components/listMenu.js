const menu = {
    print() {
        return`
        <div class="bg-indigo-500 flex justify-around">
        <a class="py-2 hover:bg-red-400" href="/" data-navigo="">Trang chủ</a>
        <a class="py-2 hover:bg-red-400" href="/about">Tuyển sinh</a>
        <a class="py-2 hover:bg-red-400" href="/product">Trương trình đào tạo</a>
        <a class="py-2 hover:bg-red-400" href="/product">Góc tuyển sinh</a>
        <a class="py-2 hover:bg-red-400" href="/product">Tuyển dụng</a>
        <div class="py-2"> 
          <input class="py-1" type="text">
          <button class="bg-blue-200 py-1 hover:bg-sky-500  ">Tìm kiếm</button>
       </div>
      </div>
        `;
    },
    
};

export default menu;
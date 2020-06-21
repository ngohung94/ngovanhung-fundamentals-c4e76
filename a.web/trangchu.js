
  function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        if (filter != ''  && txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
            document.getElementById("up").style.display = "block";
        } else {
            li[i].style.display = "none";
        }
    }
}
let data = [
    {
        a : "./ip11.html",
        img : "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/9/11/637037687757921048_11-pro-max-chung.png",
        name: "Iphone 11 Pro",
        price: "28.000.000₫",
        priceSale: "30.490.000₫",
        buy : "product-1"
    },
    {
        a : "./ip11.html",
        img : "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/8/1/637002351614380313_636749593270587915_iphoneXS-1o.png",
        name: "Iphone XS max",
        price: "25.590.000₫",
        priceSale: "28.490.000₫",
        buy : "product-2"
    },
    {
        a : "./ip11.html",
        img : "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/30/636948128206495550_iphone-8-plus.png",
        name: "Iphone 8 Plus",
        price: "13.990.000₫",
        priceSale: "15.490.000₫",
        buy : "product-3"
    },
    {
        a : "./ip11.html",
        img : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAPEhUQDxAPDxAPEA8QDw0QFQ8PEBAQFhUXFhURFRUYHiggGBolGxYVITEhJSkrLjAuFyAzODMsNygtLisBCgoKDg0OGhAQGi0fHyU3KzUtLS0tLS0tKy0rLS8tLisrLS03LS0uLS0tNTctLS0tKy0vLS0tLi4rLy0rKy0uLf/AABEIAPYAzQMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAwUBAgQGBwj/xABNEAABAwIABgkQCQMDBQEAAAABAAIDBBEFEhMhMXEGIjRBUVRhkdEHFBUyNVNjcnN0gZSisbPBJDNCUoKSodLUI7LwQ2LhJURFZIMW/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAECAwQFBv/EACkRAQACAQMDAwMFAQAAAAAAAAABAhEDEjEEITIFE0FRcfBhgbHB0RT/2gAMAwEAAhEDEQA/APuKIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIghqqpkTcZ5tnsAM5ceADfK5RVTuztiaxvhHbb0taM3OoYf6j3TOzhjnRQjeABs5w5SRp4AF5fZr1QaXBbhHLjSzPFxDGA51r2xrEgBtwRcnSDYGxVctIrD2GUn8D7aZSfwPtrxmxDZ5S4Tu2MOjkbbGieA1wBzA2BIIPCDrtcX9Wo3LxpxPd0ZSfwPtplJ/A+2uRsjTcAtJbmcAQSDwHgW6jcn2nTlJ/A+2mUn8D7a5lhNx7Tpyk/gfbUc9XKwYzjAAN/bqImyhwbGJZHSOztiOKwb2Pa5dzEAaypi2UTSIjMuiCqqX58nExu8XF4cfw73pXVlJfB8zulbor4Yzb9GmUl8HzO6Uykvg+Z3St1EKqPHyWUjyoYJDDjNygZe2PiacW+a6YMtspL4Pmd0plJfB8zulSALjGDz1wajLVFjAIetcYdbAh5dlgy31mfFvfQmDLoykvg+Z3SmUl8HzO6VIQsJgy0ykvg+Z3SmUl8HzO6VuiYMouu5G9vGC3fdGS4jlxSL8111RSNeA5pDgdBGhRqCMZOUAdpNfNwSAXuNYDr+KOFODl3IiIgREQVVAWiJmK4OGm437m5X586r2C5WYQfUPa50MjYm4/wBlhZmMZP2bgYwvpxt+xX3nA252eL81rXYPimzvabgWxmlzHW4LjPbkWcWxOXTOnmMPh3UkwXK6rFQ1rmxBhYHEECQlzSQ3hADbk7xxRvr7myncJHyGWQtexjWwHEycZbjXe3Ne5uL3O8FpR0EUP1bbE5i8kucQNALjnXUotbM5XrTbGEMLCCNqG4rbAix39AsNGhTrVZVVojAiwikaVDrNOpSbHgMhcG+M95OvGIt+gUFWdqdS0wZVZCikmc0kQtqJizQXBpc+3JcBWpyy1vFdIq/LVnF6X1mX+OmWrOL0vrMv8dauVYKpZsbpRWHCIjPXToskZMZ2Li2Avi6L2aBfgCmy1Zxel9Zl/jplazi9L6zL/HQRYX2N0VY5r6qminexuK1zwSQ297Zjwrg//BYJ4hT8zulWmWrOL0vrMv8AHTK1nF6X1mX+OgjwPscoqJznUtNFA6QBr3MBBc0G4BueFWir8rWcXpfWZf46Zas4vS+sy/x0Fgir8tWcXpfWZf46Zas4vS+sy/x0Fgo6gC8Zva0gtykhwtzErjM9YP8At6X1mX+OpGVAljp5QCBKYpA06QHNxrHnUStHK0RERAiISg8/gbc8fi/NdBXNgc/R4/F+anKxd0MrCwihLN0WEQZWVql0EFedoVyyPxsF1J/9arHMx4PuXXWdqVxf+KqfIV3ukVqcstbxeoKIUWzkEREBERAREQEREGr9B1FVeC9zUfk6X4QVo/QdRVVgw2paK/e6X4YUStXleoiIgUFaLxvBzgsfcHUVOoaztH2BJxH2Azk5jmCEKXBX1DNXzKlKhwS69PGeFt8+Y6eBSkrB3wIsXS6JZupIonO0c5zBRLvpjtRqUxCl5xHZrFE4AgNGMc2MSLW5FzSRlpsf+FZAqtqicY39GreUzHZTTtMy5K47QqCcf9LqLWH0SfMPIlS1/aFQveHYLqCOK1Iz5s7YnNP6gpTk1vF6YohRbOQREQEREBERAREQav0HUVU4OANNRXF9pSnPwiK4Vs/QdRVTg91qWiNidpSDMCTnjA5s6iVq8r5ERECIiDzuCtzx+L81ISosF7nj8X5qQlYO+C6XWLrF1CW11PTTWzH0H5Lmul1OSYysm1LfvD3Lmq5sY5tA/UrmuimbKxpxE5RVp2hUDmYuC6gXv9FqncHbRud81JXnaFazdy6jzOf4JU05Z6/i9KUQotnIIi87sw67lYKSia8OqDi1FU0tb1tT2OMWk6ZHWxW20XJNsytSu60RwPMbNuqJJC17cHtaWMeYX4QkGNEZt+KBuiRw33dqOArwtHJsgwkMrFUVrmHRKJTTRnxQzFB9AsvaUXU1mqpY3V5jgoaVuTpMGQuMjsne5yr9GM453EXJ4QvpUdI2NoYxrWtaA1rWgAADMAAu33dLSjFIzP1/P6S+DS7I9kGCCHTSSTMB20VRi1DCODH7cegr6psF2aw4VgyobkJBJkXxOc1wMmLjWYdJuL5iAcx02uuvZNgZtRE5rg03B0r4JV0lRgoysxMpFK5jwA50bmSxuxo5GuGgi5Hp4QEmKavee32+P9Wxl+mkXj+phst7KUgdIR1zARHUDRc/Zkt/uA5w5ewXFas1nEqtX6DqKq8F7mo/J0vwgrR+g6iqvBe5qPydL8IKkpryvEREQIiIPN4M3PH4vzW5KjwbuePxfmtiVhL0IZul1rdLqEtkutUug2ul1rdLoIa3tTqUMYtgqo83rfdIpqo7U6lE3uVU+b1vukV6csdfxepKIUWzjRVM7YmOkebNY0uceQcHKom10cURlmeyJoBfI95DWs1k8GYLxXVKw9iTUtAw555MvP5OPPGz0vF//nyr511R9kslTKKQOIgp8XGb3ya1y53Da9gNa9Dp+inVrE8Z/held0voeFerBQxktgjnqSPtACKM6i7P7K8/VdWKocP6VJCzlke+X9AGr5hExdTGL3NH0vp4jvXP3dlOnq9k/qhYQqQY3TR07nfVyxsYGg/cfj41mn7w0b+bR5HCtfVyEiollc5pIc1x0HfFhmWzY11VtnxNkPbxkRPP3mWvG48uYt/CF2f8elXxrEN50KxGcO3qU4d6zr2h7sWKqBgk0Bocc7Hn0i34l+iV+Vp4TE1lQwAuje17mnO02dcXHAdBHKv0xsdrxU0sM4/1YWOOe+2tZ2ffzgr571bp/bvWXmXmJns736DqKq8F7movJ0vwgrR+g6iqvBe5qPydL8ILx5RXleIiIgREQeZwduePxfmskrXB+54/F+aErCXoQzdLrW6XULNrpda3S6IbXS61ul0Sjqu1Kjb3KqfN63+2RbVR2pWrO5VT5vW+6RXpyw1/F6ooiBbON8E2V4ZZJh24zsbNDAXm5u4NybgzgaCW5t8tJXmdlEWLW1APfnH0Os4foVLX4Oc7CZaT2laXuf8A7RJjXvyj3qLD1Y2pq5pmdo+Tanha0Bod6Q2/pX1HTac1mK/Ecfy6tKsxZzRNXYxihgautoXt0riHpadWDmUMcwJcwmwkaW8gcM7Tzj9VrUy7y42DGcBypafhh1OriMQtCWiA5TtQx2MF9u6lTicE0eNpELh6BI8D9AF+f8N1BcBDGCQAC8DSc4DW85X6Y2L4NNJR09Me2gp4mP8AHDRjn8118161rRfbWPj8l5SyfoOoqrwXuaj8nS/CCtH6DqKqsF7movJ0vwgvAlavK9RERAiIg8vQ7nj8X5rBKxQn6PHq+a1JXO9GG11i61JS6JbXS61ul0G10utbpdBpVHalYZ3KqPN633SLFUdqVmPuVUeb1vukV6csNfxerQIi2cb8z7K4JIaqoacxbUSxX38UWDedmKfxKrhjX0HqvYLEeEIpXHFhrIJOQNqY2hmOfwmLmK8QIg0kAhwH2hoK+y9PtGrpxd6WhG6MpYm2Ws81tC0kmtoXK4kr0LXiHRfUisMPddbYwiaXu07y1yjWDGcbK02GbGpsNVAAa5tJC4GeXQDviNp33Hg3hn4F53VdZXTrOJ7vK1L7pek6kuxR1TKyqnbtGPFQb/aLbiFmrGxnfgHCvuq5cG0EdNG2KJoa1oAsNVvcAupfK9Rre5b9I/M/uyav0HUVVYL3NReTpfhBWr9B1FVWC9zUXk6X4QXPK1eV6iIiBERB5OjP0ePV81qSs0h+jx+KfeoyVzvRhm6XWt0uiW10utbpdBtdLrW6XQaVR2pUkXcmo83rf7ZFDVHalSxdyajzet90ivTlhr+L1iIi2cbyXVO2OOwhROEQvU0564puFzmg40f4mkjXZfDMKUU1McWUN0huOxzZI8ctDsnjjMHgHtTY79rL9QLwezjqe9el81FUdZ1EoAnaRjU1UG9rlWfeGazrHUvQ6Pr79PmscS109WacPhbqho0uHv8AcuKowidDGnPmBPDyBe4wZ1KMJxVDBVUsVTTY39V0NQyK7LbxIDhY5+13rZtK+s4B2AYNo5BNBShkjRtXyvdO9h4W4xIaeUZ9S6dX1CbVzux9i+pNnynYV1K6quLZ8IY9NT5iIe1nlGr/AEm8pGNwDfX3bBODIaSJsFPGyKKMWbGwWA4TwknSSc5311gLK8q+pN+WQiIsxq/QdRVVgvc1F5Ol+EFav0HUVVYL3NReTpfhBRK1eV6iIiBERB5ClP0ePUfeoiVvTbnj1H3qIlc70YZul1rdYuiW90utLqE1QvbPptmsTpto02RDpul1Dl28J5nac2bRpzjMssma7QboFSdqV0Qdyajzet90i5Kk7Urqp+5NR5vW+6RXpyx1/F60ohRbOMREQEREBERAREQav0HUVVYL3NReTpfhBWr9B1FVWC9zUXk6X4QUStXleoiIgREQeMpz/Qj1H3qElSQn+hHqPvUBK53otrrF1rdYcL/4CiW91qAOTObnXpuo8ny/o1ZxP8sEG4a3TYX/AM/4RoA0WCjxOX9AmT/ywRDNS7aldtP3JqPN633SKtqWbU5/RYKypu5E/m1Z/bIr05Y6/i9aUQotnGIiICIiAiIgIiINX6DqKqsF7movJ0vwgrV+g6iqrBe5qLydL8IKJWryvUREQIiIPFRfUR6j71zldDARBHfNmOnNvrmK53owwiwiJZRYRBlFhEEdT2pVhTdyKjzas/tkVdU9qVf7GadstFk5BdkolY9ucYzHOcCLjPoJV6csNfxegKKt7Es77V+s1P7k7Es77V+s1P71s41kirexLO+VfrNT+5OxLO+1frNT+5BZIqmooYY2l8k9SxjRdz3VNSGgcpx1xMyZGNi4VDNOUL6wZuHJ4+UHpaoTh6NFVR4NjcA5s1S5rgC1wqakgg74OOt+xLO+VfrNT+5ShZIq3sSzvlX6zU/uTsSzvtX6zU/uQWD9B1FVWC9zUXk6X4QUhwSzvlX6zVfuU74QwQsYLNY9jWtzmzWtIA5gFErV5WSIiIEREHmKlxdTi+mN5a7ksS3oVOVf4QYIHuyg+j1BuX70Up0g8AJzg8KrZ8GSDOy0jTnDgQDbUfksrRLr07xEYcKLo6wm7272elOsJu9u9npVcS13V+rnRT9YTd7d7PSnWE3e3ez0piTfX6oEXR1hN3t3s9KdYTd7d7PSmJN1fq4qjtSvRbDpsalA+457OZxPzVRJg+Yj6t3s9Kh2O1rqKV0U7SyKU3a82s1+ix4AfkrVzEstXFo7PbosNcDnBuN4rK2cYiIg46ukyksTnEGOHKSZPPtptqI3HhDQZDY75adIC7Fq8EjMbHeOn9N9cMktZfFbDTWv9a6aWwHDkxHcn/bjDWoTy7ImBpNswJxrb1zp59OslSLDRYZzc750XOpZUkiIiIFFO8h0TR9p+fUGud8lI94AuTYDSSoqMGR+WIswAtiB3wdL9WYAenhUStWPl3oiIgREQavYHAggEEWIOcEcBCp5tjzb3hllpx92I7X8puB6FdImExMxwpOwUnHJ+ZnQnYKTjk/MzoV2ijCd0qTsFJxyfmZ0LBwDLx2oHoj6FeImDdKh7AS8eqeaL9q37BSccn5mdCu0TBulSdgpOOT8zOhclXsRyuZ9VOfRH0L0yJg3S8zg/YpJT5o6+qxfuOEL2jVdtwrMYOl4y/8AJH0KzRMQbpVvY6XjL/yR9CdjpeMv/JGrJEwbpVhwdLxl4/BH0LXsZNxuT8kPQrVEwjdKsGDpeMv/ACR9Cz2Ol4y/8kaskTCd0q3sdLxl/wCSNYODpeMv/JH0KzRMG6XBBgwD6x7prZxjgWvw4ozfou9EUomZkRERAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg/9k=",
        name: "Iphone 7",
        price: "7.490.000₫",
        priceSale: "8.490.000₫",
        buy : "product-4"
    },
    {
        a : "./ip11.html",
        img : "https://images.fpt.shop/unsafe/fit-in/192x192/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/1/27/636526515750427366_1o-6splus-32.png",
        name: "Iphone 6",
        price: "6.490.000₫",
        priceSale: "7.490.000₫",
        buy : "product-5"
    },
    {
        a : "./mb.html",
        img : "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2018/8/2/636688207026520043_mabookair-1o.png",
        name: "Macbook Air 13 ",
        price: "28.000.000₫",
        priceSale: "30.490.000₫",
        buy : "product-6"
    },
    {
        a : "./mb.html",
        img : "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/4/11/637221970108265448_macbook-air-13-2020-silver-dd.png",
        name: "Macbook Air 12",
        price: "25.590.000₫",
        priceSale: "29.490.000₫",
        buy : "product-7"
    },
    {
        a : "./mb.html",
        img : "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2020/4/11/637221970108314570_macbook-air-13-2019-gold-dd.png",
        name: "Macbook Air 11",
        price: "21.499.000₫",
        priceSale: "24.490.000₫",
        priceSale: "28.490.000₫",
        buy : "product-8"
    },
    {
        a : "./mb.html",
        img : "https://images.fpt.shop/unsafe/fit-in/240x215/filters:quality(90):fill(white)/cdn.fptshop.com.vn/Uploads/Originals/2019/5/31/636948957624237933_macbook-pro--touch-bar-2019-dd.png",
        name: "Macbook Pro 10",
        price: "17.490.000₫",
        priceSale: "18.490.000₫",
        buy : "product-9"
    },
    {
        a : "./mb.html",
        img : "data:image/jpeg;base64,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",
        name: "Macbook Pro 9 ",
        price: "14.490.000₫",
        priceSale: "16.490.000₫",
        buy : "product-10"
    },

];

localStorage.setItem("data", JSON.stringify(data));

let newData = JSON.parse(localStorage.getItem("data"));
// console.log(newData);

    let html =''
for (let data of newData){
      html += ` <div class="mb-form">
    <a href="${data.a}">
      <img width="180" height="180"
        src="${data.img}">
      <p id="phone-1">${data.name} </p>
      <div class="price">
        <strong id="price-1">${data.price}</strong></br>
        <s>${data.priceSale}</s>
      </div>
    </a>
    <p class="buy">
          <button onclick="addGioHang(${data.buy})" id="${data.buy}">
            <strong>Thêm vào giỏ </strong>
          </button>
        </p>
  </div>`
}
document.getElementById("mobile-1").innerHTML= html



localStorage.setItem('gioHang',JSON.stringify([]))

let key = "CartList";
let gio = ''
function addGioHang(){
    alert("Đưa vào giỏ hàng")
    for (let data of newData){
        gio += `
                
                <tr>
                    <th class="name">${data.name}</th>
                    <th class="price">${data.price}</th>
                    <th>Số lượng</th>
                    <th>Tổng tiền</th>
                    <th>Thao tác</th>
                </tr>
               
                
                `
    }
}
function layDsItemGioHang(){
    let CartList =[];
    // Lay chuuoi luu tru trong local
    let JsonCartList = localStorage.getItem(key)
    // chuyen tu json qua danh sach gio hang
    if (JsonCartList == null){
    CartList =   JSON.parse(JsonCartList)    
    }
    return CartList 
    
}

function itemGioHang (id,sl){
    let gioHang = {}
    gioHang.id = id;
    gioHang.sl = sl;
    return gioHang
}

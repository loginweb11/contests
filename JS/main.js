// =================================================================
let NewSign = "NewSign:v0";
// =================================================================
let zainListLost = document.querySelector("#zainListLost");
let zainListWin = document.querySelector("#zainListWin");
let hazemListWin = document.querySelector("#hazemListWin");
let hazemListLost = document.querySelector("#hazemListLost");
let elboraeyListWin = document.querySelector("#elboraeyListWin");
let elboraeyListLost = document.querySelector("#elboraeyListLost");
let elkelanyListWin = document.querySelector("#elkelanyListWin");
let elkelanyListLost = document.querySelector("#elkelanyListLost");
let fasalListWin = document.querySelector("#fasalListWin");
let fasalListLost = document.querySelector("#fasalListLost");
let mahmodListWin = document.querySelector("#mahmodListWin");
let mahmodListLost = document.querySelector("#mahmodListLost");
let mosaabListWin = document.querySelector("#mosaabListWin");
let mosaabListLost = document.querySelector("#mosaabListLost");
let emadListWin = document.querySelector("#emadListWin");
let emadListLost = document.querySelector("#emadListLost");
let mosahListWin = document.querySelector("#mosahListWin");
let mosahListLost = document.querySelector("#mosahListLost");
// =================================================================
let darkHref = document.getElementById("darkHref");
let darkModeBtn = document.getElementById("darkModeBtn");
let lightModeBtn = document.getElementById("lightModeBtn");
let LoginBox = document.querySelector("#LoginBox");
let LoginBtn = document.querySelector("#LoginBtn");
let InputSubmit = document.querySelector("#InputSubmit");
let welcomeUser = document.querySelector("#welcomeUser");
let ProfileBtn = document.querySelector("#ProfileBtn");
let profileBox = document.querySelector("#profileBox");
let errorInput = document.querySelector("#errorInput");
let errorInput2 = document.querySelector("#errorInput2");
let InputIdUser = document.querySelector("#InputIdUser");
let MainBtn = document.querySelector("#MainBtn");
let matchList = document.querySelector("#matchList");
let userImg = document.querySelector("#userImg");
let userName = document.querySelector("#userName");
let userInfo = document.querySelector("#userInfo");
let title = document.querySelector("#title");
let startname = document.querySelector("#startname");
let startimage = document.querySelector("#startimage");
let resetBtn = document.querySelector("#resetBtn");
let InputIdUserName = document.querySelector("#InputIdUserName");
let logo = document.querySelector("#logo");
let matchRankBtn = document.querySelector("#matchRankBtn");
let matchLevelBtn = document.querySelector("#matchLevelBtn");
let matchlisthomebtn = document.querySelector("#matchlisthomebtn");
let matchlevel = document.querySelector("#matchlevel");
let matchhome = document.querySelector("#matchhome");
let matchrankbox = document.querySelector("#matchrankbox");
let userprofileW = document.querySelector("#userprofileW");
let userprofileL = document.querySelector("#userprofileL");
let userprofileE = document.querySelector("#userprofileE");
let playersList = document.querySelector("#playersList");
let ProfileMassageName = document.querySelector("#ProfileMassageName");
let massageImage = document.querySelector("#massageImage");
let Massageclosebtn = document.querySelector("#Massageclosebtn");
let Massageclosebtnfull = document.querySelector("#Massageclosebtnfull");
let addMassageBox = document.querySelector("#addMassageBox");
let addMassage = document.querySelector("#addMassage");
let newSign = document.querySelector("#new");
let MatchHistory = document.querySelector("#MatchHistory");
let CupBtn = document.querySelector("#CupBtn");
let addCoinsBtn = document.getElementById("addCoinsBtn");
let coinsElement = document.getElementById("coins");
let coins = parseInt(localStorage.getItem("coins")) || 0;
let DevolperSign = document.querySelector("#DevolperSign");
let menuTitle = document.getElementById("menuTitle");
// ============================= Shop Start ==============================
let ShopDevolper = document.getElementById("ShopDevolper");
// =======================================================================
let ShopDark = document.getElementById("ShopDark");
// =============================== Shop End ==============================

if (window.localStorage.getItem("userId") === "true") {
    setInterval(function () {
        coins += 5;
        localStorage.setItem("coins", coins);
        coinsElement.innerHTML = window.localStorage.getItem("coins");
    }, 20000)
    setInterval(function () {
        localStorage.setItem("coins", coins);
        coinsElement.innerHTML = window.localStorage.getItem("coins");
    }, 100)
    // ============================= Shop Start ==============================
    ShopDevolper.onclick = function () {
        if (coins >= 500) {
            coins -= 500;
            window.localStorage.setItem("Devolper", `true`);
            setTimeout(() => {
                window.location.reload();
            }, 200);
        }
    }
    // =======================================================================
    ShopDark.onclick = function () {
        if (coins >= 15) {
            coins -= 15;
            darkHref.href = "CSS/master - dark.css";
            window.localStorage.setItem("web - mode", "dark")
            setTimeout(() => {
                window.location.reload();
            }, 200);
        }
    }
    // =============================== Shop End ==============================
}

let currentDate = new Date();
let arabicMonths = ["يناير", "فبراير", "مارس", "إبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
let day = currentDate.getDate();
let month = arabicMonths[currentDate.getMonth()];
menuTitle.innerHTML = `${month}<span style="opacity: 0;">i</span>${day} `;

CupBtn.onclick = function () {
    MatchHistory.style.display = "block";
}

if (window.localStorage.getItem("web - mode") === "dark") {
    darkHref.href = "CSS/master - dark.css";
} else if (window.localStorage.getItem("web - mode") === "light") {
    darkHref.href = "CSS/master.css";
}

addMassage.onclick = function () {
    addMassageBox.style.display = "flex";
}

Massageclosebtn.onclick = function () {
    addMassageBox.style.display = "none";
}

Massageclosebtnfull.onclick = function () {
    addMassageBox.style.display = "none";
}

matchLevelBtn.onclick = function () {
    matchhome.style.display = "none";
    matchrankbox.style.display = "none";
    matchlevel.style.display = "block";
}

matchlisthomebtn.onclick = function () {
    matchhome.style.display = "block";
    matchrankbox.style.display = "none";
    matchlevel.style.display = "none";
}

matchRankBtn.onclick = function () {
    matchhome.style.display = "none";
    matchlevel.style.display = "none";
    newSign.style.display = "none";
    window.localStorage.setItem(`${NewSign}`, "true");
    matchrankbox.style.display = "block";
}

logo.onclick = function () {
    LoginBox.style.display = "none";
    profileBox.style.display = "none";
    matchList.style.display = "none";
    playersList.style.display = "none";
    MatchHistory.style.display = "none";
};

LoginBtn.onclick = function () {
    LoginBox.style.display = "flex";
};

InputSubmit.onclick = function () {

    if (InputIdUser.value === "2565") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("hazemRefresh", "true");
            window.localStorage.setItem("userName", "حازم محمد");
            window.localStorage.setItem("userImg", "./Pictures/hazem.png");
            window.localStorage.setItem("userprofliewin", `${hazemListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${hazemListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${hazemListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "2354") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("zainRefresh", "true")
            window.localStorage.setItem("userName", "زين علام");
            window.localStorage.setItem("userImg", "./Pictures/zain.png");
            window.localStorage.setItem("userprofliewin", `${zainListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${zainListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${zainListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "6524") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("elboraeyRefresh", "true")
            window.localStorage.setItem("userName", "أحمد البرعي");
            window.localStorage.setItem("userImg", "./Pictures/elboraey.png");
            window.localStorage.setItem("userprofliewin", `${elboraeyListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${elboraeyListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${elboraeyListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "0011") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("elkelanyRefresh", "true")
            window.localStorage.setItem("userName", "الـكـيـلانـي");
            window.localStorage.setItem("userImg", "./Pictures/elkelany.png");
            window.localStorage.setItem("userprofliewin", `${elkelanyListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${elkelanyListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${elkelanyListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "6652") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("fasalRefresh", "true")
            window.localStorage.setItem("userName", "فيصل");
            window.localStorage.setItem("userImg", "./Pictures/fasal.png");
            window.localStorage.setItem("userprofliewin", `${fasalListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${fasalListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${fasalListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "9852") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("mahmodRefresh", "true")
            window.localStorage.setItem("userName", "محمود عمرو");
            window.localStorage.setItem("userImg", "./Pictures/mahmod.png");
            window.localStorage.setItem("userprofliewin", `${mahmodListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${mahmodListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${mahmodListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "1564") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("mosaabRefresh", "true")
            window.localStorage.setItem("userName", "مـصـعـب");
            window.localStorage.setItem("userImg", "./Pictures/mosaab.png");
            window.localStorage.setItem("userprofliewin", `${mosaabListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${mosaabListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${mosaabListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "6451") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("emadRefresh", "true")
            window.localStorage.setItem("userName", "عماد علي");
            window.localStorage.setItem("userImg", "./Pictures/emad.png");
            window.localStorage.setItem("userprofliewin", `${emadListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${emadListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${emadListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else if (InputIdUser.value === "9856") {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            errorInput.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        } else {
            setTimeout(function () {
                window.location.reload();
            }, 4000);
            LoginBox.style.display = "none";
            welcomeUser.style.display = "flex";
            window.localStorage.setItem("coins", "0");
            window.localStorage.setItem("userId", "true");
            window.localStorage.setItem("mosahRefresh", "true")
            window.localStorage.setItem("userName", "إبراهيم موسي");
            window.localStorage.setItem("userImg", "./Pictures/mosah.png");
            window.localStorage.setItem("userprofliewin", `${mosahListWin.innerHTML}`);
            window.localStorage.setItem("userproflielost", `${mosahListLost.innerHTML}`);
            window.localStorage.setItem("userproflieEaqal", `${mosahListEaqal.innerHTML}`);
        }
    }

    //===========================================================

    else {
        if (InputIdUserName.value === "") {
            errorInput2.style.display = "none";
            setTimeout(function () {
                errorInput2.style.display = "flex";
            }, 300);
        }
        else {
            if (InputIdUser.value === "") {
                errorInput2.style.display = "none";
                setTimeout(function () {
                    errorInput2.style.display = "flex";
                }, 300);
            } else {
                errorInput.style.display = "none";
                errorInput2.style.display = "none";
                setTimeout(function () {
                    errorInput.style.display = "flex";
                }, 300);
            }
        }
    }
};

if (window.localStorage.getItem("emadRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${emadListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${emadListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${emadListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("mosahRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${mosahListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${mosahListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${mosahListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("zainRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${zainListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${zainListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${zainListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("hazemRefresh") === "true") {
    window.localStorage.setItem("Devolper", `true`);
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${hazemListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${hazemListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${hazemListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("elboraeyRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${elboraeyListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${elboraeyListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${elboraeyListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("fasalRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${fasalListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${fasalListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${fasalListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("elkelanyRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${elkelanyListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${elkelanyListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${elkelanyListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("mahmodRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${mahmodListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${mahmodListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${mahmodListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("mosaabRefresh") === "true") {
    setTimeout(function () {
        window.localStorage.setItem("userprofliewin", `${mosaabListWin.innerHTML}`);
        window.localStorage.setItem("userproflielost", `${mosaabListLost.innerHTML}`);
        window.localStorage.setItem("userproflieEaqal", `${mosaabListEaqal.innerHTML}`);
    }, 500);
}

if (window.localStorage.getItem("userId") === "true") {
    LoginBtn.style.display = "none";
    ProfileBtn.style.display = "flex";
};

if (window.localStorage.getItem("Devolper") === "true") {
    DevolperSign.style.display = "flex";
};

if (window.localStorage.getItem(`${NewSign}`) === "true") {
    newSign.style.display = "none";
};

ProfileBtn.onclick = function () {
    profileBox.style.display = "flex";
    MatchHistory.style.display = "none";
    matchList.style.display = "none";
    playersList.style.display = "none";
};

ProfileMassageName.value = window.localStorage.getItem("userName");
startimage.src = window.localStorage.getItem("userImg");
massageImage.src = window.localStorage.getItem("userImg");
startname.innerHTML = window.localStorage.getItem("userName");
userImg.src = window.localStorage.getItem("userImg");
userName.innerHTML = window.localStorage.getItem("userName");
userprofileW.innerHTML = window.localStorage.getItem("userprofliewin");
userprofileL.innerHTML = window.localStorage.getItem("userproflielost");
userprofileE.innerHTML = window.localStorage.getItem("userproflieEaqal");

MainBtn.onclick = function () {
    if (window.localStorage.getItem("userId") === "true") {
        matchList.style.display = "block";
        matchhome.style.display = "block";
        matchrankbox.style.display = "none";
        matchlevel.style.display = "none";
    } else {
        matchList.style.display = "none";
        title.style.display = "flex";
        setTimeout(function () {
            title.style.opacity = "0";
            setTimeout(function () {
                title.style.display = "none";
                title.style.opacity = "1";
            }, 100);
        }, 2000);
    };
};

CupBtn.onclick = function () {
    if (window.localStorage.getItem("userId") === "true") {
        MatchHistory.style.display = "block";
    } else {
        MatchHistory.style.display = "none";
        title.style.display = "flex";
        setTimeout(function () {
            title.style.opacity = "0";
            setTimeout(function () {
                title.style.display = "none";
                title.style.opacity = "1";
            }, 100);
        }, 2000);
    };
};

resetBtn.onclick = function () {
    window.localStorage.clear();
    setTimeout(function () {
        window.location.reload();
    }, 100);
}

darkModeBtn.onclick = function () {
    darkHref.href = "CSS/master - dark.css";
    window.localStorage.setItem("web - mode", "dark")
}

lightModeBtn.onclick = function () {
    darkHref.href = "CSS/master.css";
    window.localStorage.setItem("web - mode", "light")
}

if (window.localStorage.getItem("Devolper") === "true") {
    userImg.onclick = function () {
        playersList.style.display = "block";
    }
}

// $(function () {
//     $(".formcarryForm").submit(function (e) {
//         e.preventDefault();
//         var href = $(this).attr("action");

//         $.ajax({
//             type: "POST",
//             url: href,
//             data: new FormData(this),
//             dataType: "json",
//             processData: false,
//             contentType: false,
//             success: function (response) {
//                 if (response.status == "success") {
//                     alert("سيتم مراجعة المنشور اولاً قبل اضافتة فى الموقع");
//                 }
//                 else if (response.code === 422) {
//                     alert("يرجا التاكد من الحقول");
//                     $.each(response.errors, function (key) {
//                         $('[name="' + key + '"]').addClass('formcarry-field-error');
//                     });
//                 }
//                 else {
//                     alert("An error occured: " + response.message);
//                 }
//             },
//             error: function (jqXHR, textStatus) {
//                 const errorObject = jqXHR.responseJSON

//                 alert("Request failed, " + errorObject.title + ": " + errorObject.message);
//             },
//             complete: function () {
//                 window.location.reload();
//             }
//         });
//     });
// });
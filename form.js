
// php ajax
$(document).ready(function () {
    $("form").submit(function (event) {
        var formData = {
            applicationname: $("#applicationname").val(),
            applicationurl: $("#applicationurl").val(),
            firstenvironment: $("#firstenvironment").val(),
            numberofpages: $("#numberofpages").val(),
            boxTesting: $("#boxTesting").val(),
            firstappfunctionality: $("#firstappfunctionality").val(),
            tentativestartdate: $("#tentativestartdate").val(),
            firsttestingcredentials: $("#firsttestingcredentials").val(),
            userroles: $("#userroles").val(),
            linescode: $("#linescode").val(),


            application2: $("#application2").val(),
            applicationcommunicate: $("#applicationcommunicate").val(),
            applicationruns: $("#applicationruns").val(),
            numberscreen: $("#numberscreen").val(),
            sceondenvironment: $("#sceondenvironment").val(),
            sceondappfunctionality: $("#sceondappfunctionality").val(),
            secondtestinghour: $("#secondtestinghour").val(),
            sceondtestingcredentials: $("#sceondtestingcredentials").val(),
            sceonduserrole: $("#sceonduserrole").val(),



            apiurl: $("#apiurl").val(),
            apidocument: $("#apidocument").val(),
            thirdenvironment: $("#thirdenvironment").val(),
            demoapp: $("#demoapp").val(),
            apicall: $("#apicall").val(),
            thirdtestinghour: $("#thirdtestinghour").val(),
            apikey: $("#apikey").val(),



            externalip: $("#externalip").val(),
            internalip: $("#internalip").val(),
            onsite: $("#onsite").val(),
            networkdiagram: $("#networkdiagram").val(),


            manyservice: $("#manyservice").val(),
            policydocument: $("#policydocument").val(),
            noenvironment: $("#noenvironment").val(),
            developeruser: $("#developeruser").val(),
            listuser: $("#listuser").val(),
            processdocument: $("#processdocument").val(),


            diagramfile: $("#diagramfile").val(),



        };

        $.ajax({
            type: "POST",
            url: "https://lancerswork.info/SoniaProjects/stacksharp/formemail.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (data) {
            console.log(data);
        });

        event.preventDefault();
    });
});


// next previous


$(document).ready(function () {

    var current_fs, next_fs, previous_fs;
    var opacity;
    var current = 1;
    var steps = $("fieldset").length;
    setProgressBar(current);

    $(".next").click(function () {

        current_fs = $(this).parent();
        next_fs = $(this).parent().next();

        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

        //show the next fieldset
        next_fs.show();
        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                next_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(++current);
    });

    $(".previous").click(function () {

        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();

        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");

        //show the previous fieldset
        previous_fs.show();

        //hide the current fieldset with style
        current_fs.animate({ opacity: 0 }, {
            step: function (now) {
                // for making fielset appear animation
                opacity = 1 - now;

                current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                });
                previous_fs.css({ 'opacity': opacity });
            },
            duration: 500
        });
        setProgressBar(--current);
    });

    function setProgressBar(curStep) {
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
            .css("width", percent + "%")
    }

    $(".submit").click(function () {
        return false;
    })

});

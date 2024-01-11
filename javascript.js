$(document).ready(function () {


    $(".EnrollCoursesbtn").click(function () {
        let modelCoursePrint = $(this).parent().siblings().next().children().html();
        $("#modelCoursePrint").val(modelCoursePrint)

        let modelFeesPrint = $(this).parent().siblings().next().next().children().next().children().html()
        $("#modelFeesPrint").val(modelFeesPrint)    
        

    });

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

    $(".allCoursesGroups").click(function () {
        if ($(this).text() == "ᴀʟʟ") {
            $(".allCoursesCardGroup").removeClass("showCourseCard");
        }
        else if ($(this).text() == "ғɪɴᴀɴᴄᴇ") {
            $(".allCoursesCardGroup").addClass("showCourseCard");
            $(".finance").removeClass("showCourseCard");
            // alert("finance")
        }

        else if ($(this).text() == "ɢʀᴀᴘʜɪᴄs") {
            $(".allCoursesCardGroup").addClass("showCourseCard");
            $(".graphics").removeClass("showCourseCard")

        }

        else if ($(this).text() == "ᴘʀᴏɢʀᴀᴍᴍɪɴɢ ᴀɴᴅ ᴅᴇᴠᴇʟᴏᴘᴍᴇɴᴛ") {
            $(".allCoursesCardGroup").addClass("showCourseCard");
            $(".programming_Development").removeClass("showCourseCard")

        }
        else if ($(this).text() == "ʜᴀʀᴅᴡᴀʀᴇ & sᴏғᴛᴡᴀʀᴇ") {
            $(".allCoursesCardGroup").addClass("showCourseCard");
            $(".hardware_software").removeClass("showCourseCard");

        }
        else if ($(this).text() == "ᴏᴘᴇʀᴀᴛɪɴɢ sʏsᴛᴇᴍs ᴀɴᴅ sʏsᴛᴇᴍ ᴀᴅᴍɪɴɪsᴛʀᴀᴛɪᴏɴ") {
            $(".allCoursesCardGroup").addClass("showCourseCard");
            $(".o_s").removeClass("showCourseCard");

        }

    });

// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

    $(".allCourseCard").click(function(){
       let allCourseCard= $(this).text();
       $("#modelCoursePrint").val(allCourseCard);
    })









































    // $(".allCoursesGroups").click(function(){
    //     a=$(this).text()
    //     console.log(a);

    // })





















































})
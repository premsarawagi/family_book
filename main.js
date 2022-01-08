var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","WhatsApp Image 2022-01-07 at 2.30.55 PM.jpeg", "WhatsApp Image 2022-01-07 at 2.11.04 PM.jpeg" , "WhatsApp Image 2022-01-07 at 2.16.33 PM.jpeg","WhatsApp Image 2022-01-07 at 2.06.38 PM.jpeg", "WhatsApp Image 2022-01-07 at 2.14.00 PM.jpeg","WhatsApp Image 2022-01-07 at 2.04.44 PM.jpeg"];
var names = ["Family Book","Ratan Sarawagi", "Abhishek Sarawagi", "Prem Sarawagi", "Veena Sarawagi", "Sonam Sarawagi", "Vanya Sarawagi" ];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 6
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = images[i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = names[i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}

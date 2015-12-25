// Change post preview button url 
// Change www.cyberciti.biz/faq/?p=124&preview=true
// To server1.cyberciti.biz/faq/?p=124&preview=true
function nixcraft_preview_link() {
    $slug = basename(get_permalink());
    $mydomain = 'http://server1.cyberciti.biz';
    $mydir = '/faq/';
    $mynewpurl = "$mydomain$mydir$slug & preview=true";
    return "$mynewpurl";
}
add_filter( 'preview_post_link', 'nixcraft_preview_link' );

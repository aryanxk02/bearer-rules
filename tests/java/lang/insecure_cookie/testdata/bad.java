import javax.servlet.http.Cookie;

public class Test
{
  public void cookie()
  {
    Cookie c1 = new Cookie("c1", "foo");
// bearer:expected java_lang_insecure_cookie
    c1.setSecure(false);

    boolean f = false;
    javax.servlet.http.Cookie c2 = new javax.servlet.http.Cookie("c2", "bar");
// bearer:expected java_lang_insecure_cookie
    c2.setSecure(f);
  }
}

<template>
  <div class="contact">
    <div class="container">
      <div class="contact-title px32 fw500">{{ $t("contacts") }}</div>
      <div class="contact-wrap">
        <div class="contact-left">
          <p>{{ $t("phone") }}: +7 778 125 2586</p>
          <p>Email: asd@asd.com</p>
          <p>{{ $t("address") }}: Қабдолова көшесі, 117</p>
          <div class="social">
            <a
              target="_blank"
              href="https://instagram.com/dakeesi?igshid=NTc4MTIwNjQ2YQ=="
              ><img src="@/assets/images/instagram.png" alt=""
            /></a>
            <a target="_blank" href="https://wa.me/+77781252586"
              ><img src="@/assets/images/whatsapp.png" alt=""
            /></a>
          </div>
        </div>
        <div class="contact-right">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.8078386799807!2d76.8423701!3d43.2344884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369c6ccea4123%3A0x79b10a5138d38e1c!2z0YPQuy4g0JrQsNCx0LTQvtC70L7QstCwIDExNywg0JDQu9C80LDRgtGL!5e0!3m2!1sru!2skz!4v1682950313646!5m2!1sru!2skz"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.contact {
  background-color: #373737;
  padding: 150px 0 100px 0;
  &-title {
    text-transform: uppercase;
    text-align: center;
  }
  &-left {
    p {
      margin-bottom: 20px;
    }
  }
  iframe {
    width: 100%;
  }
}
.social {
  margin-bottom: 50px;
  img {
    margin-right: 10px;
  }
}
@media (max-width: 940px) {
  .contact {
    &-title {
      margin-bottom: 20px;
    }
  }
}
</style>

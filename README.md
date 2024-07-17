## Welcome

Next.js 로 구축한 개발 블로그 소스코드입니다.

구현 과정은 [블로그 글](https://www.d5br5.dev/blog/nextjs_blog/setup)에 자세하게 작성해두었으니 참고 부탁드립니다.

Repository Star 부탁드립니다. 큰 힘이 됩니다. 감사합니다.

좋은 하루 보내세요!

---

### Fork 하실 분들 FAQ

- Giscus 가 정상 작동하지 않아요!

  - credential 정보를 환경 변수로 분리해 두었습니다.
  - `.env.local` 파일을 생성하신 후, 아래 정보를 채워주세요.

    ```env
    NEXT_PUBLIC_GISCUS_REPO_NAME=user/user_repo_name
    NEXT_PUBLIC_GISCUS_REPO_ID=R_repoid
    NEXT_PUBLIC_GISCUS_CATEGORY_ID=foobarboobar
    ```

- `fs` 라이브러리가 디렉토리 구조를 제대로 읽지 못해요!

  - `Error: ENOENT: no such file or directory` 에러가 발생하는 경우
  - windows 환경에서만 위와 같은 에러가 발생합니다. -> mac os 사용을 권장합니다.

  - 배포 환경에서는 에러가 발생하지 않습니다.

  - windows에서도 에러가 발생하지 않도록 추후 업데이트해두겠습니다.

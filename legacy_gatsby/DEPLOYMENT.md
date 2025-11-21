# 배포 가이드 (Deployment Guide)

이 문서는 Kim SungJoo의 포트폴리오를 Vercel에 배포하는 방법을 안내합니다.

## 기술 스택

- **프레임워크**: Gatsby 3.4.1
- **스타일링**: styled-components
- **폰트**: Calibre (메인), SF Mono (코드)
- **배포 플랫폼**: Vercel (권장)

---

## Vercel 배포 가이드

### 사전 준비사항

1. **GitHub 저장소 준비**
   - 프로젝트가 GitHub에 푸시되어 있어야 합니다
   - 저장소는 Public 또는 Private (Vercel Pro 필요) 가능

2. **Vercel 계정 생성**
   - [Vercel](https://vercel.com)에 가입
   - GitHub 계정으로 로그인 권장

### 배포 단계

#### 방법 1: Vercel 웹 대시보드를 통한 배포 (가장 간단)

1. **프로젝트 가져오기**
   - [Vercel Dashboard](https://vercel.com/dashboard) 접속
   - "Add New..." → "Project" 클릭
   - GitHub 저장소 선택 또는 Import

2. **프로젝트 설정**
   - **Framework Preset**: Gatsby (자동 감지됨)
   - **Root Directory**: `./` (기본값)
   - **Build Command**: `npm run build` (자동 설정됨)
   - **Output Directory**: `public` (Gatsby 기본값, 자동 설정됨)
   - **Install Command**: `npm install` 또는 `yarn` (자동 설정됨)

3. **환경 변수 설정** (필요한 경우)
   - Google Analytics Tracking ID 등
   - `GA_TRACKING_ID` 등 필요한 환경 변수 추가

4. **배포 실행**
   - "Deploy" 버튼 클릭
   - 빌드 완료 후 자동으로 배포 URL 제공

#### 방법 2: Vercel CLI를 통한 배포

1. **Vercel CLI 설치**
   ```bash
   npm install -g vercel
   ```

2. **로그인**
   ```bash
   vercel login
   ```

3. **배포**
   ```bash
   vercel
   ```
   
   프로덕션 배포:
   ```bash
   vercel --prod
   ```

### 커스텀 도메인 설정

1. **Vercel 대시보드에서 도메인 추가**
   - 프로젝트 → Settings → Domains
   - 원하는 도메인 입력

2. **DNS 설정**
   - 도메인 제공업체에서 DNS 레코드 추가:
     - Type: `CNAME`
     - Name: `@` 또는 `www`
     - Value: `cname.vercel-dns.com`

3. **SSL 인증서**
   - Vercel이 자동으로 SSL 인증서 발급 및 관리

### 환경 변수 설정

Vercel 대시보드에서:
1. 프로젝트 → Settings → Environment Variables
2. 필요한 변수 추가:
   - `GA_TRACKING_ID`: Google Analytics 추적 ID (선택사항)
   - 기타 필요한 환경 변수

### 자동 배포 설정

기본적으로 Vercel은:
- `main` 브랜치에 푸시 시 자동 프로덕션 배포
- Pull Request 생성 시 자동 Preview 배포
- 각 커밋마다 고유한 Preview URL 생성

### 빌드 최적화

Vercel은 Gatsby를 자동으로 감지하고 최적화합니다:
- 자동 이미지 최적화
- Edge Network를 통한 빠른 전 세계 로딩
- 자동 HTTPS
- 자동 압축

### vercel.json 설정 (선택사항)

고급 설정이 필요한 경우 `vercel.json` 파일을 생성할 수 있습니다:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "public",
  "devCommand": "npm run develop",
  "installCommand": "npm install",
  "framework": "gatsby",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

---

## 배포 전 체크리스트

- [ ] `gatsby-config.js`의 `siteUrl`이 실제 배포 URL로 설정되어 있는지 확인
- [ ] `src/config.js`의 이메일 및 소셜 미디어 링크가 올바른지 확인
- [ ] 프로덕션 빌드 테스트: `npm run build && npm run serve`
- [ ] 모든 이미지 및 리소스가 올바르게 로드되는지 확인
- [ ] Google Analytics 설정 (필요한 경우)
- [ ] 커스텀 도메인 준비 (필요한 경우)

---

## 빌드 및 테스트

### 로컬에서 프로덕션 빌드 테스트

```bash
# 의존성 설치
npm install
# 또는
yarn

# 프로덕션 빌드
npm run build

# 빌드된 사이트 미리보기
npm run serve
```

빌드가 성공하면 `http://localhost:9000`에서 사이트를 확인할 수 있습니다.

---

## 문제 해결

### 빌드 실패 시

1. **로컬에서 빌드 테스트**
   ```bash
   yarn build
   # 또는
   npm run build
   ```
   로컬에서 실패하면 Vercel에서도 실패합니다.

2. **빌드 로그 확인**
   - Vercel 대시보드 → Deployments → 실패한 배포 클릭
   - Build Logs에서 오류 확인

3. **일반적인 문제**

   **GraphQL 버전 충돌 오류**
   ```
   Cannot use GraphQLScalarType "JSON" from another module or realm
   ```
   - 해결 방법: `package.json`에 이미 `resolutions`와 `overrides`가 설정되어 있습니다
   - 로컬에서 `yarn install` 또는 `npm install`을 다시 실행하세요

   **기타 문제**
   - Node 버전 불일치: `.nvmrc` 파일 확인
   - 의존성 문제: `node_modules` 삭제 후 재설치
     ```bash
     rm -rf node_modules yarn.lock
     yarn install
     ```
   - 환경 변수 누락: Vercel 대시보드에서 확인

### 성능 최적화

- 이미지 최적화: `gatsby-plugin-image` 사용 확인
- 폰트 최적화: `font-display: swap` 설정 확인
- 불필요한 플러그인 제거

---

## 추가 리소스

- [Vercel 공식 문서](https://vercel.com/docs)
- [Gatsby 배포 가이드](https://www.gatsbyjs.com/docs/deploying-to-vercel/)
- [Vercel CLI 문서](https://vercel.com/docs/cli)

---

## 참고사항

- Vercel 무료 플랜: 월 100GB 대역폭, 6000분 빌드 시간
- 자동 HTTPS 및 CDN 포함
- Preview 배포는 무제한
- 커스텀 도메인 무료 지원


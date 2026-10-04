export const site = {
  name: "ayushi yadav",
  role: "cloud & devops engineer",
  location: "ghaziabad, india, gmt+5:30",
  hello: "hello, नमस्ते, こんにちは",
  pitch:
    "i work across aws, terraform, and observability stacks, and build incident-response tooling like polaris and remediate. go and python. upstream contributor to prometheus/alertmanager, kgateway, and argo-cd. aws certified in cloudops and data engineering.",
  email: "ayushi.work007@gmail.com",
  phone: "+91 97737 30222",
  github: "https://github.com/ayushi-work",
  socials: [
    { label: "github", href: "https://github.com/ayushi-work" },
    { label: "linkedin", href: "https://linkedin.com/in/ayushi-yadav-a13683242/" },
    { label: "x", href: "https://x.com/ayushiyaar" },
    { label: "mail", href: "https://mail.google.com/mail/?view=cm&to=ayushi.work007@gmail.com" },
    { label: "resume", href: "/resume_ayushi.pdf" },
  ],
  status: "available for cloud/devops roles",
};

export const certs = [
  { label: "aws cloudops associate (soa-c03)", href: "https://www.credly.com/badges/0698c9c0-c79f-44a4-ad52-500e13c94705" },
  { label: "aws data engineer assoc (dea-c01)", href: "https://www.credly.com/badges/f8639d02-7ed7-4312-9662-2f2d24996ea1" },
  { label: "aws cloud practitioner (clf-c02)", href: "https://www.credly.com/badges/f2e8b198-4005-45bf-8868-21e88ebf244e" },
  { label: "aws ai practitioner (aif-c01)", href: "https://www.credly.com/badges/3fd71e00-8871-4a9d-8d1e-bd82e43b8ecb" },
  { label: "network technician (cisco)", href: "https://www.credly.com/badges/86c6a42b-6f0b-4e89-bfeb-1112bd2bd30a" },
  { label: "lfs101 linux", href: "https://www.credly.com/badges/00d6543f-5bba-488c-a5e9-5cad533fc9dd" },
];

export const skills = [
  { group: "languages", items: ["go", "python", "typescript", "bash"] },
  {
    group: "cloud & infra",
    items: ["aws (ec2, bedrock, sagemaker, cloudwatch, cloudtrail)", "linux", "docker", "kubernetes", "terraform"],
  },
  { group: "ci/cd & gitops", items: ["github actions", "jenkins", "argo cd", "helm"] },
  { group: "observability", items: ["prometheus", "grafana", "opentelemetry"] },
  { group: "web", items: ["react", "next.js", "html", "css", "javascript"] },
  {
    group: "certifications",
    items: certs,
  },
];

export const experience = [
  {
    org: "open source, cloud native",
    logo: "cn",
    role: "open-source contributor",
    dates: "jun 2026 to present",
    points: [
      "prometheus/alertmanager: extracted notifier validation into independent validate() methods across all 22 notifier types for cleaner error aggregation.",
      "kgateway: fixed frontendtls cert validation bug for cross-namespace listenersets + strengthened regression tests for multi-tenant tls.",
      "argoproj/argo-cd: resolved 12+ cves via go dependency upgrades, verified with go build + govulncheck, fixed ci in maintainer-reviewed prs.",
    ],
    stack: ["go", "prometheus", "kubernetes", "argo-cd"],
  },
  {
    org: "x402-open",
    logo: "x4",
    role: "cloud deployment",
    dates: "oct 2025",
    points: [
      "provisioned and deployed full app stack on aws ec2 with public access on ubuntu linux.",
      "configured networking, security groups, env vars, and git-based deploy workflows end-to-end.",
    ],
    stack: ["aws", "ec2", "linux", "git"],
    links: [
      { label: "live site", href: "https://x402open.org/" },
      { label: "x", href: "https://x.com/x402open" },
    ],
  },
  {
    org: "kiet, department of it",
    logo: "kt",
    role: "kubernetes workshop instructor",
    dates: "2026",
    points: [
      "designed and delivered a 3-hour kubernetes workshop: containers from first principles, docker hands-on, and live cluster demos.",
      "built a 3-node proxmox lab with cloud-init ubuntu vms, then ran a k3s cluster on top for the live sessions.",
      "ran live failure drills: pod deletion, node drains, and simulated node failure, with prometheus/grafana observability throughout.",
    ],
    stack: ["docker", "proxmox", "k3s", "prometheus"],
    links: [
      { label: "post", href: "https://www.linkedin.com/posts/kietdeemedtobeuniversity-departmentofit-kubernetes-ugcPost-7453042134129176576-1ifi/" },
    ],
  },
];

export const projects = [
  {
    title: "polaris: k8s incident simulation & self-healing",
    desc: "injects controlled failures, correlates logs/metrics/traces, generates ai-assisted incident reports. automated restarts, rollbacks, scaling via go + k8s apis + prometheus + grafana + opentelemetry. may 2026.",
    tags: ["go", "kubernetes", "prometheus", "grafana", "opentelemetry"],
    badge: "★ 2 • github.com/ayushi-work/polaris",
    href: "https://github.com/ayushi-work/polaris",
    image: "/projects/polaris.jpg",
  },
  {
    title: "remediate: automated devops incident response",
    desc: "end-to-end pipeline: ingests logs + prometheus metrics, classifies via llm (langgraph + aws bedrock), triggers remediation playbooks. k8s + alerting rules + grafana + helm. nov 2025.",
    tags: ["python", "aws bedrock", "kubernetes", "helm", "prometheus"],
    badge: "github.com/ayushi-work/remediate",
    href: "https://github.com/ayushi-work/remediate",
    image: "/projects/remediate.jpg",
  },
];

export const oss = [
  { repo: "prometheus/alertmanager", pr: "notifier validate() refactor across 22 types", state: "merged" },
  { repo: "kgateway/kgateway", pr: "fix frontendtls cert validation for cross-namespace listenersets", state: "merged" },
  { repo: "argoproj/argo-cd", pr: "resolve 12+ cves via go dep upgrades + govulncheck", state: "merged" },
];

export const writingProfiles = [
  { label: "medium", href: "https://medium.com/@ayushi.work007", handle: "@ayushi.work007" },
  { label: "aws builder center", href: "https://builder.aws.com/community/@ayushi17", handle: "@ayushi17" },
];

export const posts = [
  {
    title: "understanding bottlerocket from an sre perspective",
    date: "jun 30, 2026",
    read: "8 min read",
    excerpt:
      "immutable, container-optimized os vs amazon linux: patching, incident response, and observability trade-offs for eks fleets.",
    platform: "medium + aws builder",
    href: "https://medium.com/@ayushi.work007/understanding-bottlerocket-from-an-sre-perspective-operational-trade-offs-compared-to-amazon-linux-f64d1f3b333f",
  },
  {
    title: "polaris: ai-powered kubernetes incident detection & self-healing",
    date: "may 31, 2026",
    read: "4 min read",
    excerpt:
      "watches pods for oomkilled/crashloopbackoff, sends context to an llm for rca, executes remediation. go, client-go, chaos mode included.",
    platform: "medium + aws builder",
    href: "https://medium.com/@ayushi.work007/polaris-c94fd07d41d5",
  },
  {
    title: "zero-downtime kubernetes upgrades using a self-healing approach",
    date: "apr 15, 2026",
    read: "7 min read",
    excerpt:
      "cordon → drain → upgrade → verify, one node at a time. pdbs, rolling updates, readiness probes, and letting metrics gate the rollout.",
    platform: "medium",
    href: "https://medium.com/@ayushi.work007/zero-downtime-kubernetes-upgrades-using-a-self-healing-approach-58324a1c4a92",
  },
  {
    title: "build a three-tier web app on aws",
    date: "mar 4, 2026",
    read: "12 min read",
    excerpt:
      "cloudfront + s3 frontend, api gateway + lambda logic tier, dynamodb data tier: full step-by-step with code and screenshots.",
    platform: "medium",
    href: "https://medium.com/@ayushi.work007/build-a-three-tier-web-app-using-amazon-web-services-aws-bd54d388e1a2",
  },
  {
    title: "using chaos engineering on aws to find real bottlenecks",
    date: "feb 7, 2026",
    read: "9 min read",
    excerpt:
      "nat gateways, retry storms, slow autoscaling, control-plane limits: what fis experiments reveal that staging never will.",
    platform: "medium + aws builder",
    href: "https://medium.com/@ayushi.work007/using-chaos-engineering-on-amazon-web-services-aws-to-find-real-bottlenecks-b5bb92322aa2",
  },
  {
    title: "console-only real-time data ingestion & storage pipeline on aws",
    date: "2026",
    read: "aws builder article",
    excerpt:
      "real-time ingestion to storage built entirely from the aws console: no cli, no iac, pure click-path engineering.",
    platform: "aws builder",
    href: "https://builder.aws.com/content/39aBbAbJlwegORcJ4fsfvJsQOK8/building-a-console-only-real-time-data-ingestion-and-storage-pipeline-on-aws",
  },
  {
    title: "decision support tool (built with kiro)",
    date: "2026",
    read: "aws builder article",
    excerpt:
      "a decision-support app built with kiro, most-discussed post on the profile with 6 comments.",
    platform: "aws builder",
    href: "https://builder.aws.com/content/37we1GyqtmtoueiJt5tkLccJGao/decision-support-tool-built-with-kiro",
  },
];

export const watching = [
  {
    title: "house, m.d.",
    platform: "netflix",
    status: "s3 e19 of 24",
    progress: 0.79,
    note: "late into season 3. the differentials never get old.",
    image: "/watching/house.jpg",
    pos: "object-[center_25%]",
  },
  {
    title: "brooklyn nine-nine",
    platform: "netflix",
    status: "s3 e2 of 23, fifth rewatch",
    progress: 0.09,
    note: "fifth time through. still the best cold opens on television.",
    image: "/watching/b99.jpg",
    pos: "object-top",
  },
];

export const designs = [
  { id: 1, title: "don't tap the glass", tag: "posters", image: "/designs/posters/dont-tap-the-glass.jpg", w: 640, h: 800, href: "https://www.behance.net/gallery/231170611/Dont-Tap-The-Glass", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 2, title: "ghostly kisses", tag: "posters", image: "/designs/posters/ghostly-kisses.jpg", w: 640, h: 800, href: "https://www.behance.net/gallery/233182625/Ghostly-Kisses", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 3, title: "all who care are truly kind", tag: "posters", image: "/designs/posters/all-who-care.png", w: 1400, h: 1980, href: "https://www.behance.net/gallery/232460761/all-who-care-are-truly-kind", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 4, title: "face the sun", tag: "posters", image: "/designs/posters/face-the-sun.jpg", w: 1400, h: 1980, href: "https://www.behance.net/gallery/234359639/face-the-sun", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 5, title: "isolate", tag: "posters", image: "/designs/posters/isolate.png", w: 1400, h: 1750, href: "https://www.behance.net/gallery/238662253/Isolate", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 6, title: "just remember you're beautiful", tag: "posters", image: "/designs/posters/youre-beautiful.png", w: 1400, h: 1750, href: "https://www.behance.net/gallery/239138553/Just-remember-youre-beautiful", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 7, title: "pursue yourself", tag: "posters", image: "/designs/posters/pursue-yourself.png", w: 1400, h: 1075, href: "https://www.behance.net/gallery/242485383/pursue-yourself", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 8, title: "doechii", tag: "posters", image: "/designs/posters/doechii.png", w: 1080, h: 1350, href: "https://www.behance.net/gallery/234046535/Doechii", caption: "poster, full project on behance.", linkLabel: "view on behance ↗" },
  { id: 9, title: "the art of living", tag: "ui", image: "/designs/ui/art-of-living.png", w: 1400, h: 1960, href: "https://www.behance.net/gallery/223199295/the-art-of-living", caption: "ui design, full case study on behance.", linkLabel: "view on behance ↗" },
  { id: 10, title: "earthkind, sunflower-inspired wellness", tag: "ui", image: "/designs/ui/earthkind.png", w: 808, h: 632, href: "https://www.behance.net/gallery/228097311/EarthKind-Sunflower-Inspired-Wellness-Experience", caption: "ui design, full case study on behance.", linkLabel: "view on behance ↗" },
  { id: 11, title: "coasta", tag: "ui", image: "/designs/ui/coasta.png", w: 1400, h: 788, href: "https://www.behance.net/gallery/238447095/Coasta", caption: "ui design, full case study on behance.", linkLabel: "view on behance ↗" },
  { id: 12, title: "koyna landing page", tag: "ui", image: "/designs/ui/koyna.png", w: 1400, h: 910, href: "https://www.behance.net/gallery/238054297/Koyna-Landing-Page", caption: "ui design, full case study on behance.", linkLabel: "view on behance ↗" },
  { id: 13, title: "holy crêpe landing", tag: "ui", image: "/designs/ui/holy-crepe.png", w: 1400, h: 896, href: "https://www.behance.net/gallery/238222021/Holy-Crepe-Landing", caption: "ui design, full case study on behance.", linkLabel: "view on behance ↗" },
];

export const process = [
  {
    step: "01 assess",
    desc: "understand the current state first: review dashboards, map dependencies, and define slos before making changes.",
    tools: "aws, diagrams, notion",
  },
  {
    step: "02 automate",
    desc: "codify repeatable work. terraform for infrastructure, containers for workloads, gitops for deployments.",
    tools: "terraform, docker, actions",
  },
  {
    step: "03 observe",
    desc: "instrument systems and alert on what matters: metrics, logs, and traces with actionable thresholds.",
    tools: "prometheus, grafana, opentelemetry",
  },
  {
    step: "04 harden",
    desc: "address vulnerabilities, maintain backups, and monitor costs.",
    tools: "govulncheck, velero, budgets",
  },
];

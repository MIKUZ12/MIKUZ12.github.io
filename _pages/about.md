---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

{% include about-homepage-header.html %}

Hi, There! I am an undergraduate student at Harbin Institute of Technology (Shenzhen). 

My research focuses on robust vision-language model adaptation under distribution shift.

I am currently diving into **world models and embodied AI**, aiming to help build more intelligent and capable robotic systems.

# <i class="fas fa-newspaper section-icon" aria-hidden="true"></i> News

<section class="profile-list-section profile-list-section--news" aria-label="Latest news">
  <ul class="profile-list">
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2026-05">May 2026</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Two papers accepted by ICML 2026</span>
        <span class="profile-list__meta">ICML 2026</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2026-02">Feb 2026</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Two papers accepted by CVPR 2026</span>
        <span class="profile-list__meta">CVPR 2026 Findings</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2025-11">Nov 2025</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Top Ten Outstanding College Students of HITSZ</span>
        <span class="profile-list__meta">Harbin Institute of Technology (Shenzhen)</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2024-10">Oct 2024</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Chinese National Scholarship</span>
        <span class="profile-list__meta">Scholarship</span>
      </span>
    </li>
  </ul>
</section>

# <i class="fas fa-book-open section-icon" aria-hidden="true"></i> Publications

<div class="publication-card first-author featured">
  <div class="publication-card__layout">
    <img src="images/afip.png" alt="AFIP overview" class="pub-thumb" style="object-fit: contain;">
    <div class="pub-body">
      <p class="pub-title"><strong>Correcting Visual Blur Induced by Attention Distraction to Reduce Hallucinations: Algorithm and Theory</strong></p>
      <p class="pub-authors"><i>Quanjiang Li<sup>†</sup>, <span class="self-author">Zhiming Liu</span><sup>†</sup>, Wei Luo, Tingjin Luo, Chenping Hou</i></p>
      <p class="pub-desc">We identify the link between human-like attention distraction and object hallucinations in multimodal models, and propose AFIP, a training-free method that corrects spatial and temporal attention dispersion to enhance visual grounding without additional training.</p>
      <p class="pub-note"><sup>†</sup> indicates equal contribution (co-first authors).</p>
      <div class="pub-meta-row">
        <span class="pub-venue">ICML 2026</span>
        <span class="pub-links"><a href="https://arxiv.org/abs/2605.24602"><em>[arXiv]</em></a></span>
        <span class="pub-links"><a href="https://github.com/MIKUZ12/AFIP"><em>[code]</em></a></span>
      </div>
    </div>
  </div>
</div>

<div class="publication-card first-author featured">
  <div class="publication-card__layout">
    <img src="images/talo.png" alt="TALO overview" class="pub-thumb">
    <div class="pub-body">
      <p class="pub-title"><strong>Do All Individual Layers Help? An Empirical Study of Task-Interfering Layers in Vision-Language Models</strong></p>
      <p class="pub-authors"><i><span class="self-author">Zhiming Liu</span>, Yujie Wei, Lei Feng, Xiu Su, Xiaobo Xia, Weili Guan, Zeke Xie, Shuo Yang</i></p>
      <p class="pub-desc">We identify task-interfering layers in vision-language models and propose a lightweight test-time intervention strategy that improves downstream few-shot reasoning without retraining.</p>
      <div class="pub-meta-row">
        <span class="pub-venue">CVPR 2026</span>
        <span class="pub-links"><a href="https://arxiv.org/abs/2602.01167"><em>[arXiv]</em></a></span>
        <span class="pub-links"><a href="https://github.com/MIKUZ12/Do-all-individual-layers-help"><em>[code]</em></a></span>
        <span class="pub-links"><a href="https://mikuz12.github.io/Do_All_Individual_Layers_Help/"><em>[website]</em></a></span>
      </div>
    </div>
  </div>
</div>

<div class="publication-card first-author">
  <div class="publication-card__layout">
    <img src="images/moon.png" alt="MOON overview" class="pub-thumb" style="object-fit: contain;">
    <div class="pub-body">
      <p class="pub-title"><strong>Von Mises-Fisher Mixture Model with Dynamic Shrinkage for Realistic Test-Time Transduction</strong></p>
      <p class="pub-authors"><i>Jiazhen Huang, <span class="self-author">Zhiming Liu</span>, Changhu Wang, Wei Ju, Ziyue Qiao, Xiao Luo</i></p>
      <p class="pub-desc">We identify the brittleness of transductive methods under imbalanced distributions and propose MOON, a training-free, model-agnostic framework that dynamically adjusts shrinkage strength to mitigate negative transfer.</p>
      <div class="pub-meta-row">
        <span class="pub-venue">ICML 2026</span>
        <span class="pub-links"><a href="https://arxiv.org/abs/2607.15851v1"><em>[arXiv]</em></a></span>
        <span class="pub-links"><a href="https://github.com/walawalagoose/MOON"><em>[code]</em></a></span>
      </div>
    </div>
  </div>
</div>

<div class="publication-card first-author">
  <div class="publication-card__layout">
    <img src="images/ttd.png" alt="TTD overview" class="pub-thumb">
    <div class="pub-body">
      <p class="pub-title"><strong>Test-Time Distillation for Continual Model Adaptation</strong></p>
      <p class="pub-authors"><i>Xiao Chen<sup>†</sup>, Jiazhen Huang<sup>†</sup>, <span class="self-author">Zhiming Liu</span>, Qinting Jiang, Fanding Huang, Jingyan Jiang, Zhi Wang</i></p>
      <p class="pub-desc">We propose a collaborative test-time distillation framework for continual model adaptation that improves robustness and generalization under realistic distribution shifts.</p>
      <p class="pub-note"><sup>†</sup> indicates equal contribution (co-first authors).</p>
      <div class="pub-meta-row">
        <span class="pub-venue">CVPR 2026</span>
        <span class="pub-links"><a href="http://arxiv.org/abs/2506.02671"><em>[arXiv]</em></a></span>
        <span class="pub-links"><a href="https://github.com/walawalagoose/TTD"><em>[code]</em></a></span>
      </div>
    </div>
  </div>
</div>

<div class="publication-card first-author">
  <div class="publication-card__layout">
    <img src="images/ttabc.png" alt="TTABC overview" class="pub-thumb">
    <div class="pub-body">
      <p class="pub-title"><strong>What Drives Test-Time Adaptation for CLIP? A Controlled Empirical Study from a Update Perspective</strong></p>
      <p class="pub-authors"><i>Jiazhen Huang<sup>†</sup>, Xiao Chen<sup>†</sup>, <span class="self-author">Zhiming Liu</span><sup>†</sup>, Yaru Sun, Jingyan Jiang, Zhi Wang</i></p>
      <p class="pub-desc">We show that adaptation gains primarily arise from test-time evidence and reliable proxies rather than heavy optimization, and the most effective adaptation paradigm varies with the type of distribution shift.</p>
      <p class="pub-note"><sup>†</sup> indicates equal contribution (co-first authors).</p>
      <div class="pub-meta-row">
        <span class="pub-venue">Under Review</span>
        <span class="pub-links"><a href="https://arxiv.org/pdf/2606.14299"><em>[arXiv]</em></a></span>
        <span class="pub-links"><a href="https://github.com/walawalagoose/TTABC"><em>[code]</em></a></span>
      </div>
    </div>
  </div>
</div>

<div class="publication-card first-author">
  <div class="publication-card__layout">
    <img src="images/adrl.png" alt="ADRL overview" class="pub-thumb">
    <div class="pub-body">
      <p class="pub-title"><strong>Adaptive Disentangled Representation Learning for Incomplete Multi-View Multi-Label Classification</strong></p>
      <p class="pub-authors"><i>Quanjiang Li<sup>†</sup>, <span class="self-author">Zhiming Liu</span><sup>†</sup>, Tianxiang Xu<sup>†</sup>, Tingjin Luo, Chenping Hou</i></p>
      <p class="pub-desc">We proposed ADRL, a novel framework that jointly addresses structural distortion and semantic ambiguity in incomplete multi-view settings by integrating label-guided feature disentanglement and category-aware embedding interaction.</p>
      <p class="pub-note"><sup>†</sup> indicates equal contribution (co-first authors).</p>
      <div class="pub-meta-row">
        <span class="pub-venue">Under Review</span>
        <span class="pub-links"><a href="https://arxiv.org/abs/2601.05785"><em>[arXiv]</em></a></span>
      </div>
    </div>
  </div>
</div>

# <i class="fas fa-award section-icon" aria-hidden="true"></i> Honors and Awards

<section class="profile-list-section profile-list-section--awards" aria-label="Awards">
  <ul class="profile-list">
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2025">2025</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Top Ten Outstanding College Students of HITSZ</span>
        <span class="profile-list__meta">Harbin Institute of Technology (Shenzhen)</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2025">2025</time>
      <span class="profile-list__content">
        <span class="profile-list__title">National Second Prize, Global Campus AI Algorithm Elite Competition</span>
        <span class="profile-list__meta">Competition Award</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2025">2025</time>
      <span class="profile-list__content">
        <span class="profile-list__title">First Prize Scholarship</span>
        <span class="profile-list__meta">Harbin Institute of Technology (Shenzhen)</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2024">2024</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Chinese National Scholarship</span>
        <span class="profile-list__meta">Scholarship</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2024">2024</time>
      <span class="profile-list__content">
        <span class="profile-list__title">First Prize Scholarship</span>
        <span class="profile-list__meta">Harbin Institute of Technology (Shenzhen)</span>
      </span>
    </li>
    <li class="profile-list__item">
      <time class="profile-list__date" datetime="2024">2024</time>
      <span class="profile-list__content">
        <span class="profile-list__title">Finalist Award, Mathematical Contest in Modeling (MCM)</span>
        <span class="profile-list__meta">Competition Award</span>
      </span>
    </li>
  </ul>
</section>

<!-- # <i class="fas fa-microscope section-icon" aria-hidden="true"></i> Research Project
<div class="project-list">
  <div class="project-item">
    <div class="project-period">May 2025 - Nov 2025</div>
    <div class="project-title">Task-Interfering Layer Optimization for Test-Time Adaptation of Multimodal Large Language Models</div>
    <div class="project-role">Leader</div>
  </div>
  <div class="project-item">
    <div class="project-period">Nov 2025 - Jan 2026</div>
    <div class="project-title">Correcting Visual Blur Induced by Attention Distraction to Reduce Hallucinations: Algorithm and Theory</div>
    <div class="project-role">Leader</div>
  </div>
  <div class="project-item">
    <div class="project-period">Jan 2025 - Jun 2025</div>
    <div class="project-title">Adaptive Disentangled Representation Learning for Incomplete Multi-View Multi-Label Classification</div>
    <div class="project-role">Leader</div>
  </div>
  <div class="project-item">
    <div class="project-period">Aug 2025 - Nov 2025</div>
    <div class="project-title">CoDiRe: Collaborative Test-Time Distillation for Robust Domain Generalization</div>
    <div class="project-role">Core Member</div>
  </div>
  <div class="project-item">
    <div class="project-period">Nov 2025 - Jan 2026</div>
    <div class="project-title">Von Mises-Fisher Mixture Model with Dynamic Shrinkage for Realistic Test-Time Transduction</div>
    <div class="project-role">Core Member</div>
  </div>
  <div class="project-item">
    <div class="project-period">Feb 2026 - Apr 2026</div>
    <div class="project-title">TouchAnything: Dataset and Framework for Bimanual Tactile Estimation from Egocentric Video</div>
    <div class="project-role">Core Member</div>
  </div>
  <div class="project-item">
    <div class="project-period">Aug 2025 - Jan 2026</div>
    <div class="project-title">Multimodal Large Language Models for Industrial Quality Inspection</div>
    <div class="project-role">Core Member</div>
  </div>
  <div class="project-item">
    <div class="project-period">Dec 2024 - Nov 2025</div>
    <div class="project-title">AI-Powered Microscopic Parasite Recognition and Extraction System</div>
    <div class="project-role">Core Member</div>
  </div>
  <div class="project-item">
    <div class="project-period">Sep 2025 - Dec 2025</div>
    <div class="project-title">Deterministic Transition State Prediction via Flow Matching and Equivariant Geometric Learning</div>
    <div class="project-role">Core Developer</div>
  </div>
</div> -->

# <i class="fas fa-graduation-cap section-icon" aria-hidden="true"></i> Educations
<div class="resume-list resume-list--education">
  <div class="resume-item">
    <div class="resume-logo resume-logo--education">
      <img src="/images/hit.png" alt="Harbin Institute of Technology logo" class="resume-logo__image">
    </div>
    <div class="resume-content">
      <div class="resume-title"><strong>Harbin Institute of Technology (Shenzhen)</strong></div>
      <div class="resume-detail">Bachelor of Engineering in Automation</div>
      <div class="resume-period">2023 - 2027</div>
    </div>
  </div>
</div>

# <i class="fas fa-briefcase section-icon" aria-hidden="true"></i> Experience

<div class="experience-container">
  <div class="experience-card">
    <img src="/images/hkust.png" alt="HKUST logo" class="experience-logo">
    <div class="experience-info">
      <strong>Hong Kong University of Science and Technology</strong><br>
      April 2026 - Present<br>
      Visiting Student<br>
      Advisor: <a href="https://cse.hkust.edu.hk/~songguo/"><em>Prof. Song Guo</em></a>
    </div>
  </div>
  <div class="experience-card">
    <img src="/images/thu.png" alt="Tsinghua University logo" class="experience-logo">
    <div class="experience-info">
      <strong>Tsinghua University</strong><br>
      November 2025 - April 2026<br>
      Research Intern<br>
      Advisor: <a href="https://www.cs.tsinghua.edu.cn/info/1126/3576.htm"><em>Prof. Zhi Wang</em></a>
    </div>
  </div>
  <div class="experience-card">
    <img src="/images/hit.png" alt="Harbin Institute of Technology logo" class="experience-logo">
    <div class="experience-info">
      <strong>Harbin Institute of Technology (Shenzhen)</strong><br>
      March 2025 - April 2026<br>
      Research Intern<br>
      Advisor: <a href="https://faculty.hitsz.edu.cn/yangshuo"><em>Prof. Shuo Yang</em></a>
    </div>
  </div>
</div>

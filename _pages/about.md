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

# <i class="fas fa-user section-icon" aria-hidden="true"></i> About Me

Hi, There👋! I am an undergraduate student at Harbin Institute of Technology (Shenzhen), working on **Trustworthy Multimodal AI** and **Adaptive, Data-Efficient Learning**. 

My previous research focuses on robust and reliable multimodal model adaptation under distribution shift, especially for test-time adaptation and hallucination mitigation in vision-language systems.

I am currently diving into **world models and embodied AI**, aiming to help build more intelligent and capable robotic systems.

# <i class="fas fa-newspaper section-icon" aria-hidden="true"></i> News
- 2026.02: &nbsp;🎉🎉 One paper "Do All Individual Layers Help?", was accepted by CVPR 2026 Findings.
- 2026.02: &nbsp;🎉🎉 One paper "Test-Time Distillation for Continual Model Adaptation", was accepted by CVPR 2026 Findings.
- 2025.11: &nbsp;🎉🎉 Recognized as one of the **'Top Ten Outstanding College Students'** at Harbin Institute of Technology (Shenzhen)
- 2025.10: &nbsp;🎉 Awarded the **First Prize Scholarship** at Harbin Institute of Technology (Shenzhen).
- 2024.10: &nbsp;🎉 Awarded the **First Prize Scholarship** at Harbin Institute of Technology (Shenzhen).

# <i class="fas fa-book-open section-icon" aria-hidden="true"></i> Publications

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/talo.png' alt="paper-1" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Do All Individual Layers Help? An Empirical Study of Task-Interfering Layers in Vision-Language Models](https://arxiv.org/abs/2602.01167)

**Zhiming Liu**, Yujie Wei, Lei Feng, Xiu Su, Xiaobo Xia, Weili Guan, Zeke Xie, Shuo Yang

- We identify task-interfering layers in vision-language models and propose a lightweight test-time intervention strategy that improves downstream few-shot reasoning without retraining.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2026</div><img src='images/ttd.png' alt="paper-2" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Test-Time Distillation for Continual Model Adaptation](http://arxiv.org/abs/2506.02671)

Xiao Chen<sup>†</sup>, Jiazhen Huang<sup>†</sup>, **Zhiming Liu**, Qinting Jiang, Fanding Huang, Jingyan Jiang, Zhi Wang

- We propose a collaborative test-time distillation framework for continual model adaptation that improves robustness and generalization under realistic distribution shifts.
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">Under Review</div><img src='images/adrl.png' alt="paper-1" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Adaptive Disentangled Representation Learning for Incomplete Multi-View Multi-Label Classification](https://arxiv.org/abs/2601.05785)

Quanjiang Li<sup>†</sup>, **Zhiming Liu**<sup>†</sup>, TianxiangXu<sup>†</sup>, Tingjin Luo, Chenping Hou

- We proposed *ADRL*, a novel framework that jointly addresses structural distortion and semantic ambiguity in incomplete multi-view settings by integrating label-guided feature disentanglement and category-aware embedding interaction.
- <sup>†</sup> indicates equal contribution (co-first authors).
</div>
</div>

# <i class="fas fa-award section-icon" aria-hidden="true"></i> Honors and Awards
- 2024: Finalist Award in the Mathematical Contest in Modeling (MCM)
- 2024: **Chinese National Scholarship**
- 2025: National Second Prize, Global Campus Artificial Intelligence Algorithm Elite Competition 2025
- 2025: **Top Ten Outstanding College Students of Harbin Institute of Technology (Shenzhen)**

# <i class="fas fa-microscope section-icon" aria-hidden="true"></i> Research Project
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
</div>

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

  <div class="resume-list resume-list--timeline">

  <div class="resume-item resume-item--timeline">
    <div class="resume-logo">
      <img src="/images/thu.png" alt="Tsinghua University logo" class="resume-logo__image">
    </div>
    <div class="resume-content">
      <div class="resume-title"><strong>Tsinghua University</strong></div>
      <div class="resume-detail">Research Intern</div>
      <div class="resume-note"><strong>Advisor:</strong>  <strong>Prof. Zhi Wang</strong></div>
      <div class="resume-period">November 2025 - April 2026</div>
    </div>
  </div>

  <div class="resume-item resume-item--timeline">
    <div class="resume-logo">
      <img src="/images/hit.png" alt="Harbin Institute of Technology logo" class="resume-logo__image">
    </div>
    <div class="resume-content">
      <div class="resume-title"><strong>Harbin Institute of Technology (Shenzhen)</strong></div>
      <div class="resume-detail">Research Intern</div>
      <div class="resume-note"><strong>Advisor:</strong>  <strong>Prof. Shuo Yang</strong></div>
      <div class="resume-period">March 2025 - Present</div>
    </div>
  </div>
</div>

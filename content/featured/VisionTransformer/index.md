---
date: '2024-01-15'
title: 'Vision Transformer for Sketch Classification'
cover: './demo.png'
github: 'https://github.com/kimmaru/vision-transformer-sketch'
external: ''
tech:
  - DeiT3
  - ViT
  - PyTorch
  - Label Smoothing
  - TTA
  - AMP
---

Advanced classification system for 500-class sketch images using Vision Transformers with data-centric optimization.

## Key Achievements

| Metric             | Baseline | Final     | Improvement        |
| ------------------ | -------- | --------- | ------------------ |
| **Accuracy**       | 50.3%    | **90.3%** | **+40.0pp**        |
| **Training Speed** | 1x       | **4-6x**  | AMP Optimization   |
| **Memory Usage**   | 100%     | **80%**   | Attention Freezing |

## Technical Highlights

- Implemented DeiT3 and Vision Transformer architectures for large-scale sketch classification
- Applied label smoothing and test-time augmentation (TTA) to improve generalization
- Optimized training with Automatic Mixed Precision (AMP) for 4-6x speedup
- Reduced memory footprint by 20% through attention mechanism freezing
- Achieved state-of-the-art performance on 500-class sketch dataset


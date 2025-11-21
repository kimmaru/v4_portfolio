---
date: '2024-05-15'
title: 'Multimodal LLM Optimization'
cover: './demo.png'
github: 'https://github.com/kimmaru/multimodal-llm'
external: ''
tech:
  - SALMONN
  - Llama-3
  - 4-bit Quantization
  - Flash Attention 2
  - VB-LoRA
---

SALMONN-based multimodal large language model optimization for efficiency and performance balance.

## Key Achievements

| Optimization           | Before    | After      | Improvement      |
| ---------------------- | --------- | ---------- | ---------------- |
| **Memory Usage**       | 9.18GB    | **5.96GB** | **-35%**        |
| **Audio Captioning**   | 0.20      | **0.32**   | **+58.8%**       |
| **Speech Recognition** | 15.2% WER | **14.0%**  | **-7.7% error** |

## Technical Highlights

- Optimized SALMONN multimodal LLM based on Llama-3 architecture
- Implemented 4-bit quantization to reduce memory usage by 35% (9.18GB → 5.96GB)
- Integrated Flash Attention 2 for efficient attention computation
- Applied VB-LoRA (Vector-based Low-Rank Adaptation) for parameter-efficient fine-tuning
- Improved audio captioning performance by 58.8% (0.20 → 0.32)
- Reduced speech recognition error rate by 7.7% (15.2% → 14.0% WER)
- Achieved optimal balance between model efficiency and performance


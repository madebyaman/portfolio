---
title: How to build multi agent systems feat Anthropic
date: 2025-06-16
tags: ["AI Agents" ]
---

These are my notes from [multi agent systems](https://www.anthropic.com/engineering/built-multi-agent-research-system) blog post by Anthropic.

- Anthropic simulations using their Console for testing different prompts + tools for agents. This would immediately help them test different prompts and reveal various failures.
- Lead orchestrator for decomposing user queries into smaller subtasks clear objective, output format, guidance and boundaries. These objectives set clear boundaries for subagents.
- In the prompt for lead orchestrator they added clear instruction of rough number of subagents needed for different categories based on user queries. This made lead orchestrator scale up or down the subagents based on user query complexity. For instance, for simple fact checking you don't need more than 2-3 subagents.
- To improve agents they used agent themselves. Given a prompt and failure, an agent is able to diagnose why the task or agent failed.
- They use extended thinking mode.
- To make the results faster they use two strategies: **parallel tool calling** and **parallel agent spawning**. The lead agent spawns multiple subagents in parallel. Plus, each subagent can call multiple tools in parallel for their task. 
- Strategies for evaluation: 
	- Start early with small samples. Anthropic recommends introducing evaluation early. For instance, with simple strategies like prompt tweaks we can immediately see huge success.
	- Using an llm-as-judge with single prompt and score between 0.0 to 1.0 and a pass-fail grade was found to be best strategy. The llm was asked to judge output in various categories like: factual accuracy, citation accuracy, source quality, and tool efficiency.
	- human evaluation was also used in addition to llm evaluation. This provided feedback often not caught by llm. Like they saw the search subagent would often prefer keyword heavy site rather than authoritative page like an academic article.

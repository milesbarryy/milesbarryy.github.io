# Free Speech on Campus: Initial Findings

Our research team has been examining student attitudes toward free speech on college campuses and social media platforms. Working with Dr. Jens Pohlmann on this UC VOICE-funded project has been eye-opening.

## The Research Question

We're investigating:

- How do students perceive free speech restrictions on campus?
- What factors drive self-censorship?
- How do these patterns differ across platforms and contexts?

## Methodological Challenges

Survey research is harder than it looks. Some challenges we've faced:

**Sample bias** - Getting representative responses from a diverse student body

**Question framing** - Avoiding leading questions while getting specific data

**Multi-response analysis** - Cleaning and visualizing data when respondents can select multiple options

## Early Patterns

While our analysis is ongoing, we're seeing interesting patterns around:

- Generational differences in speech expectations
- Platform-specific norms and behavior
- The gap between stated values and reported behavior

## Technical Approach

I've been using R for the statistical analysis, particularly:

```r
# Example: Multi-response question analysis
library(tidyverse)

survey_data %>%
  separate_rows(platforms, sep = ",") %>%
  count(platforms) %>%
  ggplot(aes(x = reorder(platforms, n), y = n)) +
  geom_col()
```

This work has reinforced that quantitative methods can shed light on complex social questions - when done carefully.

## What's Next

We're preparing a comprehensive report and potentially submitting for publication. The goal is to inform policy discussions with actual data rather than assumptions.

More findings to come as the analysis progresses.

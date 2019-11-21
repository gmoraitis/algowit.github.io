---
title: K-means SMOTE
category: notes
description: "Improving imbalanced learning through a heuristic oversampling method based on k-means and SMOTE."
icon: kmeans_smote.png
website: 
---



<img src="/assets/images/main_images/terminal.png" class="img-fluid" alt="Markdown in the Bear Markdown app">



### Abstract

Traditional supervised machine learning classifiers are challenged to learn highly skewed data distributions as they are designed to expect classes to equally contribute to the minimization of the classifiers cost function. Moreover, the classifiers design expects equal misclassification costs, causing a bias for underrepresented classes. Thus, different strategies to handle the issue are proposed by researchers. The modification of the data set has become a common practice since the procedure is generalizable to all classifiers. Various algorithms to rebalance the data distribution through the creation of synthetic instances were proposed in the past. In this paper, we propose a new oversampling algorithm named G-SOMO, a method that is adopted from our previous research. The algorithm identifies optimal areas to create artificial data instances in an informed manner and utilizes a geometric region during the data generation to increase variability and to avoid correlation. Our empirical results on 69 datasets, validated with different classifiers and metrics against a benchmark of commonly used oversampling methods show that G-SOMO consistently outperforms competing oversampling methods. The statistical significance of our results is presented.




### Publication Paper

- [Science Direct](https://www.sciencedirect.com/science/article/pii/S0020025518304997)

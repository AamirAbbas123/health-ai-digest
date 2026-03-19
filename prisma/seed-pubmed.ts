import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const IMAGE_URLS: Record<string, string> = {
  "Clinical AI": "https://placehold.co/800x450/0D7377/FFFFFF?text=Clinical+AI",
  "Drug Discovery": "https://placehold.co/800x450/84C318/FFFFFF?text=Drug+Discovery",
  "Medical Imaging": "https://placehold.co/800x450/2563EB/FFFFFF?text=Medical+Imaging",
  "AI Ethics": "https://placehold.co/800x450/E11D48/FFFFFF?text=AI+Ethics",
  "Wearables & Diagnostics": "https://placehold.co/800x450/F59E0B/FFFFFF?text=Wearables+%26+Diagnostics",
  "Policy & Regulation": "https://placehold.co/800x450/7C3AED/FFFFFF?text=Policy+%26+Regulation",
  "LLMs in Healthcare": "https://placehold.co/800x450/06B6D4/FFFFFF?text=LLMs+in+Healthcare",
};

interface ArticleData {
  title: string;
  shortTitle: string;
  category: string;
  subCategory: string;
  fullContent: string;
  mediumSummary: string;
  shortSummary: string;
  sourceUrl: string;
  authorName: string;
  publishedAt: Date;
}

const articles: ArticleData[] = [
  // ============================================================
  // CLINICAL AI (8 articles)
  // ============================================================
  {
    title: "MedIntelliCare: neurodynamic-inspired AI for medical decision support by integrating retrieval-augmented generation with multimodal cognitive processing",
    shortTitle: "Decision Support",
    category: "Clinical AI",
    subCategory: "Clinical Decision-Making",
    authorName: "Kunekar P, Mankar S, et al.",
    sourceUrl: "https://doi.org/10.1007/s11571-026-10429-z",
    publishedAt: new Date("2026-03-11"),
    fullContent: `MedIntelliCare is an AI-powered medical assistant designed to enhance diagnostic accuracy, reduce cognitive load on healthcare professionals, and integrate real-time medical data. The system leverages Retrieval-Augmented Generation (RAG) combined with principles from neural computation and decision-making processes to provide evidence-based clinical decision support.

The platform processes multimodal clinical inputs including patient history, laboratory results, imaging data, and clinical notes through a unified cognitive processing pipeline. By grounding large language model outputs in retrieved medical literature and clinical guidelines, the system minimizes hallucination risks common in generative AI applications.

Evaluation across multiple clinical scenarios demonstrated that MedIntelliCare achieves 73% alignment with expert-generated reports, representing a significant step toward reliable AI-assisted clinical decision-making. The neurodynamic-inspired architecture allows the system to adapt its reasoning pathways based on the complexity and urgency of clinical presentations.

The study highlights the potential of combining RAG frameworks with cognitive neuroscience principles to build medical AI systems that more closely mirror how experienced clinicians process and integrate complex clinical information.`,
    mediumSummary: `MedIntelliCare is an AI medical assistant that combines Retrieval-Augmented Generation with neurodynamic principles to support clinical decisions. It processes multimodal inputs including patient history, labs, imaging, and clinical notes through a unified pipeline. The system achieved 73% alignment with expert-generated reports across multiple clinical scenarios. By grounding LLM outputs in retrieved medical literature, it reduces hallucination risks while adapting reasoning to clinical complexity.`,
    shortSummary: `An AI medical assistant combining RAG with neurodynamic principles achieves 73% alignment with expert clinical reports, reducing cognitive load on healthcare professionals while integrating real-time multimodal medical data.`,
  },
  {
    title: "Bioinspired hybrid optimisation and deep belief neural networks for early chronic kidney disease detection",
    shortTitle: "CKD Detection",
    category: "Clinical AI",
    subCategory: "Kidney Disease",
    authorName: "Ahmad Z, Obidallah WJ, et al.",
    sourceUrl: "https://doi.org/10.1080/0886022X.2026.2624917",
    publishedAt: new Date("2026-03-15"),
    fullContent: `This study presents a novel approach for automatic chronic kidney disease (CKD) detection using a hybrid optimization strategy combined with Deep Belief Neural Networks. The method employs a spiral search strategy-based binary gravitational search algorithm with elephant herding optimization (SSS-BGSA-EHO) for feature selection, feeding optimized feature sets into a Deep Belief Neural Network classifier.

The hybrid bio-inspired optimization algorithm addresses the challenge of identifying the most clinically relevant features from high-dimensional patient data. By combining gravitational search with elephant herding behaviors, the algorithm balances exploration and exploitation in the feature space more effectively than conventional approaches.

The system achieved an accuracy of 0.973 and an AUC of 0.996 on benchmark CKD datasets, identifying 7 clinically important features that drive prediction. These results represent state-of-the-art performance for automated CKD screening, with the selected features aligning well with established clinical indicators of kidney function decline.

The approach demonstrates how nature-inspired computational methods can be combined with deep learning architectures to create highly accurate diagnostic tools that also provide interpretable feature importance rankings for clinicians.`,
    mediumSummary: `A hybrid bio-inspired optimization method combined with Deep Belief Neural Networks enables early CKD detection with 0.973 accuracy and 0.996 AUC. The system uses a spiral search strategy-based binary gravitational search algorithm with elephant herding optimization for feature selection. It identified 7 clinically important features from high-dimensional patient data, providing both high accuracy and interpretable results for clinicians.`,
    shortSummary: `A bio-inspired deep learning system for early chronic kidney disease detection achieves 0.973 accuracy and 0.996 AUC by identifying 7 key clinical features through hybrid optimization.`,
  },
  {
    title: "RAMA: implementing Machine Learning to develop mortality risk prediction models for NICU patients with Acute Kidney Injury",
    shortTitle: "Neonatal AKI",
    category: "Clinical AI",
    subCategory: "Nephrology",
    authorName: "Vyas A, Pandya A, et al.",
    sourceUrl: "https://doi.org/10.1080/14767058.2026.2623378",
    publishedAt: new Date("2026-02-09"),
    fullContent: `This study develops and validates machine learning models for predicting mortality risk in neonatal intensive care unit (NICU) patients with acute kidney injury (AKI). Using two independent datasets from eleven healthcare centers, the researchers trained and evaluated multiple ML algorithms to identify neonates at highest risk of adverse outcomes.

Acute kidney injury in neonates carries significant mortality risk, yet current clinical scoring systems have limited predictive accuracy in this vulnerable population. The RAMA framework addresses this gap by leveraging electronic health record data including vital signs, laboratory values, gestational age, and comorbidity profiles.

The XGBoost model emerged as the top performer, achieving an AUC-ROC of 0.882, accuracy of 0.878, and F1 Score of 0.923 for neonatal AKI mortality prediction. Cross-validation across the two independent datasets from different healthcare systems demonstrated robust generalizability of the model.

The study identifies key predictive features including serum creatinine trajectories, urine output patterns, and gestational age as the most influential variables in the model. These findings provide actionable insights for NICU clinicians to prioritize early intervention in the highest-risk neonates.`,
    mediumSummary: `The RAMA framework uses machine learning to predict mortality in NICU patients with acute kidney injury, trained on data from eleven healthcare centers. The XGBoost model achieved AUC-ROC 0.882, accuracy 0.878, and F1 Score 0.923. Key predictive features include serum creatinine trajectories, urine output patterns, and gestational age. The model demonstrated robust generalizability across two independent datasets from different healthcare systems.`,
    shortSummary: `An XGBoost-based ML model predicts mortality in neonatal AKI patients with 0.882 AUC-ROC across eleven healthcare centers, identifying creatinine trajectories and gestational age as key risk factors.`,
  },
  {
    title: "Risk prediction in IgA nephropathy: from conventional models to machine learning, deep learning, and precision nephrology",
    shortTitle: "IgA Nephropathy",
    category: "Clinical AI",
    subCategory: "Precision Nephrology",
    authorName: "Xu H, Ge S",
    sourceUrl: "https://doi.org/10.1080/0886022X.2026.2613606",
    publishedAt: new Date("2026-02-08"),
    fullContent: `This comprehensive review examines the evolution of prognostic approaches for IgA nephropathy, tracing the trajectory from traditional clinical scoring systems to modern machine learning and deep learning models. IgA nephropathy is the most common primary glomerulonephritis worldwide, with highly variable outcomes ranging from stable renal function to end-stage kidney disease.

Traditional risk prediction relies on clinical variables such as proteinuria, eGFR, blood pressure, and histopathological grading using the Oxford classification. While useful, these conventional models have limited ability to capture nonlinear relationships and complex feature interactions inherent in disease progression.

The review systematically evaluates emerging ML and DL approaches including random forests, gradient boosting, neural networks, and survival analysis models that incorporate time-series data from longitudinal follow-up. These methods show improved discriminative ability compared to traditional Cox regression models.

Key advances discussed include explainable AI techniques such as SHAP values that maintain clinical interpretability, dynamic time-series modeling that captures disease trajectory changes, and multimodal prognostication integrating clinical, histopathological, and molecular data. The review charts a path toward precision nephrology where individualized risk profiles guide treatment intensity and monitoring frequency.`,
    mediumSummary: `A review tracing IgA nephropathy risk prediction from conventional clinical scoring to ML/DL approaches. Traditional models using proteinuria, eGFR, and histopathology have limited ability to capture nonlinear disease progression patterns. Modern approaches including random forests, gradient boosting, and neural networks show improved discriminative ability. The review highlights explainable AI, dynamic time-series modeling, and multimodal prognostication as key advances toward precision nephrology.`,
    shortSummary: `A comprehensive review of how ML and deep learning models are advancing IgA nephropathy risk prediction beyond conventional scoring, moving toward precision nephrology with explainable AI and multimodal data integration.`,
  },
  {
    title: "The role and utility of artificial intelligence and machine learning for diagnostic prediction in general practice",
    shortTitle: "GP Diagnostics",
    category: "Clinical AI",
    subCategory: "General Practice",
    authorName: "Hunik L, Uijen AA, et al.",
    sourceUrl: "https://doi.org/10.1080/13814788.2026.2620908",
    publishedAt: new Date("2026-02-02"),
    fullContent: `This study examines the similarities and differences between traditional statistical methods and AI/ML approaches for diagnostic prediction in general practice settings. While AI and ML have shown promise in specialized medical domains, their application and added value in primary care remain less well understood.

General practice presents unique challenges for predictive modeling: patients present with undifferentiated symptoms, disease prevalence is lower than in hospital settings, and data quality from electronic health records varies considerably across practices. The study evaluates how well AI/ML methods address these real-world constraints compared to logistic regression and other established statistical approaches.

The analysis reveals that while AI/ML models can capture complex nonlinear relationships in data, their performance advantage over traditional methods is often modest when applied to structured primary care data with limited sample sizes. Interpretability remains a significant barrier, as general practitioners need to understand and trust model predictions to integrate them into clinical workflows.

The authors identify data quality, standardization of clinical coding, and practical usability as key challenges that must be addressed before AI/ML tools can be meaningfully deployed in general practice. They advocate for collaborative development approaches that involve GPs in the design process to ensure clinical relevance and workflow integration.`,
    mediumSummary: `An examination of AI/ML versus traditional statistical methods for diagnostic prediction in general practice. While AI/ML can capture complex nonlinear relationships, performance advantages over logistic regression are often modest with limited primary care sample sizes. Key challenges include interpretability for GPs, data quality variability across practices, and workflow integration. The authors advocate for collaborative development involving general practitioners in the design process.`,
    shortSummary: `AI/ML methods show modest performance gains over traditional statistics for diagnostic prediction in general practice, with interpretability, data quality, and practical usability remaining key barriers to deployment.`,
  },
  {
    title: "Construction of performance score dynamic prediction system for clinical departments using explainable machine learning",
    shortTitle: "Dept Performance",
    category: "Clinical AI",
    subCategory: "Hospital Management",
    authorName: "Wen H, Li X, et al.",
    sourceUrl: "https://doi.org/10.1007/s13755-025-00394-y",
    publishedAt: new Date("2025-12-02"),
    fullContent: `This study presents a dynamic framework for predicting clinical department performance scores using explainable machine learning methods. The system addresses the growing need for data-driven hospital management tools that can identify departments at risk of underperformance and guide resource allocation decisions.

The researchers evaluated multiple ML algorithms including logistic regression, random forests, XGBoost, and neural networks across different prediction stages. The linear regression model achieved the highest R-squared values across all stages, suggesting that departmental performance metrics follow largely linear relationships that benefit from interpretable modeling approaches.

A key contribution is the development of ClinDeptPredictor, a web-based tool that enables hospital administrators to input departmental metrics and receive real-time performance predictions with explanations. The tool uses SHAP values to highlight which factors most strongly influence predicted performance scores.

The dynamic prediction approach allows the system to update forecasts as new quarterly data becomes available, enabling proactive management interventions rather than reactive responses to performance declines. The framework demonstrates how explainable ML can bridge the gap between advanced analytics and practical hospital administration needs.`,
    mediumSummary: `A dynamic ML framework predicts clinical department performance using explainable methods. The logistic regression model achieved the highest R-squared values across all prediction stages. The web tool ClinDeptPredictor provides real-time predictions with SHAP-based explanations for hospital administrators. The system updates forecasts dynamically as new quarterly data arrives, enabling proactive management interventions.`,
    shortSummary: `An explainable ML framework with a web tool called ClinDeptPredictor enables dynamic prediction of clinical department performance scores, using SHAP values to guide hospital resource allocation.`,
  },
  {
    title: "A Machine Learning Model to Improve Risk Adjustment Accuracy in Medicare",
    shortTitle: "Medicare Risk",
    category: "Clinical AI",
    subCategory: "Medicare",
    authorName: "Shenfeld DK, Warrenburg L, et al.",
    sourceUrl: "https://doi.org/10.1111/1475-6773.70093",
    publishedAt: new Date("2026-04-01"),
    fullContent: `This study develops "Franklin," a machine learning algorithm for one-year healthcare cost prediction trained on Medicare claims data. The model addresses longstanding limitations of the Hierarchical Condition Category (HCC) risk adjustment system used by the Centers for Medicare and Medicaid Services.

The Franklin model achieves substantially more accurate cost predictions than the current HCC system, with an R-squared of 0.44 compared to 0.15 for the HCC model. This threefold improvement in predictive accuracy has significant implications for payment equity across Medicare Advantage plans and healthcare providers.

A particularly important finding is that the Franklin model improved prediction accuracy for racial and ethnic minorities. The HCC system has been shown to systematically underpredict costs for Black and Hispanic beneficiaries, contributing to underpayment of plans serving these populations. The ML approach reduces these disparities by capturing more nuanced patterns in claims data.

The study discusses implementation considerations including model transparency, regulatory approval pathways, and the need to prevent gaming of ML-based risk adjustment systems. The authors argue that modernizing risk adjustment with ML methods could simultaneously improve payment accuracy and reduce inequities in Medicare spending.`,
    mediumSummary: `The "Franklin" ML algorithm for Medicare cost prediction achieves R-squared of 0.44 versus 0.15 for the current HCC risk adjustment system. Trained on Medicare claims data, it provides threefold improvement in predictive accuracy. Notably, the model improved accuracy for racial and ethnic minorities, addressing systematic underprediction of costs for Black and Hispanic beneficiaries in the current system. Implementation considerations include transparency and prevention of gaming.`,
    shortSummary: `A new ML algorithm called "Franklin" triples Medicare cost prediction accuracy over the current HCC system (R-squared 0.44 vs 0.15) while reducing racial and ethnic disparities in risk adjustment.`,
  },
  {
    title: "Implementing artificial intelligence to facilitate health outcomes in mood disorders",
    shortTitle: "Mood Disorders",
    category: "Clinical AI",
    subCategory: "Mood Disorders",
    authorName: "McIntyre RS, Nemeroff CB, Rasgon N",
    sourceUrl: "https://doi.org/10.1016/j.jad.2026.121444",
    publishedAt: new Date("2026-02-14"),
    fullContent: `This paper examines the capabilities of artificial intelligence for improving health outcomes in mood disorders, covering diagnostic detection, illness monitoring, treatment selection, and scalability of psychosocial interventions. Mood disorders including major depressive disorder and bipolar disorder affect hundreds of millions globally, yet treatment response rates remain suboptimal.

AI-powered diagnostic tools can analyze speech patterns, smartphone usage data, social media activity, and wearable sensor outputs to detect early signs of mood episodes before they reach clinical thresholds. Natural language processing of clinical notes and patient-reported outcomes enables continuous monitoring without additional clinician burden.

For treatment selection, ML models trained on pharmacogenomic data, clinical histories, and treatment response patterns show promise in predicting which patients will respond to specific antidepressants, mood stabilizers, or psychotherapy modalities. This precision psychiatry approach could reduce the current trial-and-error treatment paradigm.

AI chatbots and digital therapeutics can scale psychosocial interventions such as cognitive behavioral therapy to reach populations with limited access to mental health professionals. The paper addresses critical concerns including patient data confidentiality, algorithmic bias in psychiatric populations, and the importance of maintaining therapeutic alliance when technology mediates care delivery.`,
    mediumSummary: `An examination of AI capabilities for mood disorders spanning diagnostic detection, monitoring, treatment selection, and scaling psychosocial interventions. AI tools can analyze speech, smartphone data, and wearables to detect early mood episodes. ML models show promise in predicting treatment response for precision psychiatry. Digital therapeutics can scale CBT access, though concerns about confidentiality, algorithmic bias, and therapeutic alliance require careful attention.`,
    shortSummary: `AI applications in mood disorders range from early episode detection via speech and smartphone analysis to precision treatment selection and scalable digital therapeutics, though privacy and bias concerns persist.`,
  },

  // ============================================================
  // DRUG DISCOVERY (7 articles)
  // ============================================================
  {
    title: "Exosomes in diabetic kidney disease: pathogenesis, biomarker discovery, and emerging therapeutics",
    shortTitle: "Exosome Therapy",
    category: "Drug Discovery",
    subCategory: "Exosomes",
    authorName: "Zhang Y, Liu H, et al.",
    sourceUrl: "https://doi.org/10.1080/0886022X.2026.2640720",
    publishedAt: new Date("2026-03-15"),
    fullContent: `This comprehensive review examines the role of exosomes in diabetic kidney disease (DKD), covering their involvement in pathogenesis, their potential as diagnostic biomarkers, and their emerging applications as therapeutic delivery vehicles. DKD remains the leading cause of end-stage renal disease worldwide, and exosome research offers new avenues for early detection and treatment.

Exosomes are small extracellular vesicles that carry proteins, lipids, and nucleic acids between cells, mediating intercellular communication in the kidney. In DKD, exosomes from tubular epithelial cells, podocytes, and immune cells carry molecular cargo that drives fibrosis, inflammation, and glomerular damage.

The review highlights how multi-omics approaches combined with machine learning are accelerating biomarker discovery from urinary exosomes. Proteomic and transcriptomic profiling of exosome contents, analyzed through ML classifiers, has identified panels of exosomal markers that can detect DKD earlier than conventional albuminuria screening.

Therapeutically, engineered exosomes show promise as drug delivery vehicles that can target kidney-specific cell populations. Their natural biocompatibility, ability to cross biological barriers, and capacity for surface modification make them attractive alternatives to synthetic nanoparticles for delivering anti-fibrotic and anti-inflammatory agents directly to damaged renal tissue.`,
    mediumSummary: `A review of exosomes in diabetic kidney disease covering pathogenesis, biomarker discovery, and therapeutics. Exosomes mediate intercellular communication driving fibrosis, inflammation, and glomerular damage in DKD. Multi-omics combined with ML enables early biomarker discovery from urinary exosomes, outperforming conventional albuminuria screening. Engineered exosomes also show promise as targeted drug delivery vehicles for anti-fibrotic agents in damaged renal tissue.`,
    shortSummary: `Exosome research in diabetic kidney disease offers ML-powered early biomarker discovery from urinary vesicles and promising therapeutic applications as targeted drug delivery vehicles for renal tissue.`,
  },
  {
    title: "Pulmonary blood volume redistribution in COVID-19 patients and predictive value for six-month outcomes",
    shortTitle: "Long COVID Risk",
    category: "Drug Discovery",
    subCategory: "COVID-19",
    authorName: "Hu G, Zhu Z, et al.",
    sourceUrl: "https://doi.org/10.1080/25310429.2025.2607932",
    publishedAt: new Date("2026-01-07"),
    fullContent: `This study uses pre-trained deep learning algorithms to quantify pulmonary blood volume (PBV) redistribution in COVID-19 patients infected with the Omicron variant, and evaluates its predictive value for six-month clinical outcomes. Pulmonary vascular remodeling is a key pathological feature of COVID-19 that may persist long after acute infection resolves.

The deep learning pipeline automatically segments pulmonary vasculature from CT angiography scans and quantifies blood volume distribution across large, medium, and small vessel compartments. This automated analysis replaces manual vessel segmentation that previously required hours of expert radiologist time.

The study found that PBV in small vessels was a strong predictor of adverse six-month outcomes, with an odds ratio of 4.66, AUC of 0.79, and sensitivity of 92%. Patients with greater redistribution of blood volume toward small vessels during acute infection were significantly more likely to develop persistent respiratory symptoms and functional impairment.

These findings suggest that AI-quantified pulmonary vascular metrics could serve as early biomarkers for long COVID risk stratification, enabling targeted follow-up and early therapeutic intervention for patients most likely to develop chronic post-infectious complications.`,
    mediumSummary: `Deep learning algorithms quantified pulmonary blood volume redistribution in Omicron-variant COVID-19 patients from CT angiography. PBV in small vessels predicted six-month adverse outcomes with OR 4.66, AUC 0.79, and 92% sensitivity. Patients with greater small-vessel blood volume redistribution during acute infection were more likely to develop persistent respiratory symptoms. The approach could serve as an early biomarker for long COVID risk stratification.`,
    shortSummary: `AI-quantified pulmonary blood volume in small vessels predicts six-month COVID-19 outcomes with 0.79 AUC and 92% sensitivity, offering potential for early long COVID risk stratification.`,
  },
  {
    title: "Artificial intelligence for personalized multiple micronutrient supplementation in maternal health",
    shortTitle: "Maternal Nutrition",
    category: "Drug Discovery",
    subCategory: "Maternal Health",
    authorName: "Davis Jones G, Papageorghiou AT, et al.",
    sourceUrl: "https://doi.org/10.1002/ijgo.70911",
    publishedAt: new Date("2026-02-26"),
    fullContent: `This paper proposes a "nutritional digital twin" framework that uses deep learning to analyze diet-genome interactions and behavioral trends for personalized multiple micronutrient supplementation (MMS) in pregnant women. Micronutrient deficiencies during pregnancy remain a leading cause of adverse birth outcomes globally, yet supplementation approaches are largely one-size-fits-all.

The proposed framework integrates data from electronic health records, wearable device outputs, genomic markers, and dietary assessments to create individualized nutritional profiles. Deep learning models analyze complex interactions between genetic variants affecting nutrient metabolism, dietary intake patterns, and physiological changes during pregnancy.

The nutritional digital twin continuously updates its recommendations as new data becomes available throughout pregnancy, accounting for changing nutritional needs across trimesters and individual metabolic responses to supplementation. This dynamic approach contrasts with static supplementation guidelines that cannot adapt to individual variation.

The framework also incorporates behavioral modeling to predict adherence patterns and optimize supplementation timing and formulation. By considering cultural dietary preferences, socioeconomic constraints, and individual tolerance profiles, the system aims to maximize both the biological effectiveness and practical adherence of MMS regimens.`,
    mediumSummary: `A proposed "nutritional digital twin" uses deep learning to personalize micronutrient supplementation during pregnancy. The framework integrates EHR data, wearable outputs, genomic markers, and dietary assessments to model diet-genome interactions. It continuously updates recommendations across trimesters based on individual metabolic responses. Behavioral modeling predicts adherence and optimizes supplementation timing, accounting for cultural preferences and socioeconomic constraints.`,
    shortSummary: `A "nutritional digital twin" framework proposes using deep learning to personalize pregnancy micronutrient supplementation by integrating genomic, dietary, and wearable data with behavioral modeling for adherence.`,
  },
  {
    title: "Breaking through the radiation dilemma: development and clinical translation of anti-radiation drugs",
    shortTitle: "Radiation Drugs",
    category: "Drug Discovery",
    subCategory: "Radioprotection",
    authorName: "Wang L, Wang Y, Wu S, et al.",
    sourceUrl: "https://doi.org/10.1016/j.pscia.2026.100110",
    publishedAt: new Date("2026-02-12"),
    fullContent: `This review synthesizes three decades of literature on anti-radiation drug development, covering molecular mechanisms of radiation injury, evaluation of drugs across clinical and preclinical stages, and the transformative role of artificial intelligence in accelerating drug discovery for radiation countermeasures.

Current approved countermeasures including potassium iodide, Prussian blue, and cytokines for hematopoietic acute radiation syndrome are hindered by narrow application scope, significant side effects, and mechanistic knowledge gaps. Novel drug development has expanded into targeting DNA damage repair, anti-inflammation, and nano-delivery systems, though clinical translation rates remain low.

The review introduces AI-driven drug discovery as a promising paradigm for overcoming longstanding barriers in this field. Machine learning models can predict radiation-drug interactions, identify repurposable compounds, and optimize molecular structures for radioprotective properties using computational screening of vast chemical libraries.

Key challenges for AI in this domain include mitigating model black-box effects for regulatory acceptance, establishing secure frameworks for sharing sensitive radiation injury data, and creating specialized high-quality databases to address the critical scarcity of radiation biology training data. The authors propose that integrating mechanistic insights with AI-driven approaches represents the most promising path forward for developing next-generation radioprotective agents.`,
    mediumSummary: `A three-decade review of anti-radiation drug development highlights AI as a transformative paradigm for the field. Current countermeasures have narrow application and significant side effects, while novel approaches target DNA repair and nano-delivery systems. AI can predict radiation-drug interactions, identify repurposable compounds, and optimize molecular structures. Key challenges include model interpretability, sensitive data sharing frameworks, and training data scarcity in radiation biology.`,
    shortSummary: `A comprehensive review positions AI-driven drug discovery as a transformative approach for developing anti-radiation drugs, addressing decades of slow clinical translation through computational screening and molecular optimization.`,
  },
  {
    title: "Coriandrum sativum improves prognosis in clear cell renal cell carcinoma by targeting NEK6 to modulate the immune microenvironment",
    shortTitle: "Renal Cancer",
    category: "Drug Discovery",
    subCategory: "Biomarkers",
    authorName: "Li J, Zhang Y, Wang X, et al.",
    sourceUrl: "https://doi.org/10.1080/21691401.2026.2618969",
    publishedAt: new Date("2026-01-22"),
    fullContent: `This study systematically investigates the molecular mechanisms of coriander (Coriandrum sativum) in clear cell renal cell carcinoma (ccRCC) using multi-omics analysis and network pharmacology. Active compounds were screened using Traditional Chinese Medicine Systems Pharmacology, and targets were predicted using SwissTargetPrediction and Similarity Ensemble Approach.

Transcriptomic data were analyzed with WGCNA and intersected with coriander targets. Machine learning algorithms including LASSO, SVM, and random forest consistently selected NEK6 and PYGL as key targets. NEK6 was overexpressed in ccRCC and associated with better prognosis, promoter hypomethylation, and lower mutation rates.

NEK6 expression correlated with immune infiltration patterns, particularly macrophage involvement, and was enriched in tumor and myeloid cells at the single-cell level. Molecular docking and dynamics simulations revealed strong and stable binding of the flavonoids luteolin, quercetin, and chryseriol to NEK6.

The findings suggest NEK6 functions as a prognostic and immune-regulatory biomarker in ccRCC, with coriander flavonoids potentially modulating the tumor immune microenvironment through NEK6 targeting. This integrative approach demonstrates how computational methods can uncover plant-based therapeutic strategies for cancer treatment.`,
    mediumSummary: `Multi-omics and network pharmacology analysis reveals coriander flavonoids may target NEK6 to modulate the immune microenvironment in clear cell renal cell carcinoma. Machine learning algorithms consistently selected NEK6 as a key target associated with prognosis and immune infiltration. Molecular docking confirmed strong binding of luteolin, quercetin, and chryseriol to NEK6. The study demonstrates computational methods for uncovering plant-based cancer therapeutic strategies.`,
    shortSummary: `Multi-omics and ML analysis identifies NEK6 as a key prognostic biomarker in renal cell carcinoma, with coriander flavonoids showing strong binding affinity as potential immune-modulatory therapeutics.`,
  },
  {
    title: "Brain aging in bipolar disorder using a neuroimaging and machine learning-derived metric: Findings from the ENIGMA BD Working Group",
    shortTitle: "Bipolar Brain Age",
    category: "Drug Discovery",
    subCategory: "Neuroprotection",
    authorName: "Ng HX, Abe C, Alda M, et al.",
    sourceUrl: "https://doi.org/10.1016/j.jad.2026.121234",
    publishedAt: new Date("2026-01-24"),
    fullContent: `In the largest study of brain age in bipolar disorder to date, with 2919 participants (1342 BD, 1577 healthy controls), this ENIGMA consortium study compared brain-predicted age difference (brain-PAD) using machine learning applied to MRI measures of subcortical volumes, cortical thickness, and surface area.

Bipolar disorder was associated with higher brain-PAD compared to healthy controls, primarily among older patients, demonstrated by a significant age-by-diagnosis interaction. This suggests compounding effects of BD diagnosis and aging on structural brain alterations.

Medication analysis revealed important differential effects. Patients on antiepileptic medications showed greater brain-PAD (+3.20 years), as did those on combined antiepileptics and second-generation antipsychotics (+3.74 years). Notably, lithium use was not associated with advanced brain age, and individuals taking lithium showed significantly lower brain-PAD compared to those on antiepileptics alone (-4.48 years), suggesting a possible neuroprotective effect.

BD type I patients had higher brain-PAD (+1.50 years) compared to BD type II. The findings position brain-PAD as a potential clinical metric for monitoring long-term brain health and treatment effectiveness in bipolar disorder, with implications for drug selection strategies favoring lithium-based regimens.`,
    mediumSummary: `The largest brain age study in bipolar disorder (n=2919) from ENIGMA found BD associated with accelerated brain aging, especially in older patients. Lithium use showed no association with advanced brain age and was linked to 4.48 fewer years of brain-PAD versus antiepileptics, suggesting neuroprotection. BD type I showed greater brain aging than BD type II. Brain-PAD may serve as a clinical metric for monitoring treatment effectiveness and guiding drug selection.`,
    shortSummary: `The largest ENIGMA brain age study in bipolar disorder (n=2919) reveals lithium may be neuroprotective, showing 4.48 fewer years of brain aging versus antiepileptics, with implications for drug selection.`,
  },
  {
    title: "Targeting the MPO/LCN2/GMPPB axis in IBS-depression comorbidity: Integrated multi-omics and bidirectional network pharmacology",
    shortTitle: "IBS-Depression Axis",
    category: "Drug Discovery",
    subCategory: "Gut-Brain Axis",
    authorName: "Li S, Jiang F, Li X",
    sourceUrl: "https://doi.org/10.1016/j.compbiolchem.2026.108939",
    publishedAt: new Date("2026-02-08"),
    fullContent: `This study establishes an integrated computational framework for understanding the molecular mechanisms underlying IBS-depression comorbidity, combining bidirectional epidemiological analysis, multi-tissue transcriptomics, machine learning, and network pharmacology approaches.

Epidemiological analysis of the CHARLS cohort confirmed bidirectional IBS-MDD risk. Integrated transcriptomics from intestinal mucosa and prefrontal cortex, analyzed with WGCNA and machine learning (LASSO/RF/SVM-RFE), identified MPO, LCN2, and GMPPB as core comorbidity genes linked to neutrophil activation, iron dysregulation, and glycosylation defects.

Immune profiling revealed tissue-specific dysregulation: gut-dominated neutrophil and M2 macrophage infiltration in IBS versus brain-enriched CD8-positive T cells and NK cells in MDD. Bidirectional pharmacology prioritized resveratrol and quercetin as high-affinity therapeutic binders to core targets, supported by molecular dynamics simulations confirming binding stability.

The study nominates the MPO/LCN2/GMPPB axis as diagnostic biomarkers and therapeutic targets for IBS-depression comorbidity, demonstrating how computational multi-omics frameworks can uncover shared neuro-immune-endocrine mechanisms and identify natural compound-based treatment strategies for complex comorbid conditions.`,
    mediumSummary: `An integrated multi-omics framework identifies the MPO/LCN2/GMPPB axis as core genes in IBS-depression comorbidity, linking neutrophil activation, iron dysregulation, and glycosylation defects. Bidirectional epidemiological analysis confirmed mutual IBS-MDD risk. Immune profiling revealed tissue-specific patterns: neutrophil infiltration in gut versus CD8+ T/NK cells in brain. Network pharmacology prioritized resveratrol and quercetin as therapeutic agents with confirmed binding stability.`,
    shortSummary: `Multi-omics and network pharmacology identify the MPO/LCN2/GMPPB axis as shared biomarkers for IBS-depression comorbidity, with resveratrol and quercetin emerging as potential therapeutic compounds.`,
  },

  // ============================================================
  // MEDICAL IMAGING (9 articles)
  // ============================================================
  {
    title: "Enhanced fracture detection on radiographs with AI assistance for clinicians",
    shortTitle: "Fracture Detection",
    category: "Medical Imaging",
    subCategory: "Fracture Detection",
    authorName: "Qin H, Ding Y, et al.",
    sourceUrl: "https://doi.org/10.1080/07853890.2025.2610079",
    publishedAt: new Date("2025-12-30"),
    fullContent: `This meta-analysis of 26 studies evaluates the impact of AI assistance on clinician performance in fracture detection from radiographs. Fractures are among the most commonly missed diagnoses in emergency departments, with missed fracture rates ranging from 3% to 9% depending on anatomical location and clinician experience.

The pooled analysis demonstrated that AI assistance improved clinician sensitivity from 77% to 87%, representing a clinically meaningful 10-percentage-point improvement in fracture detection. The area under the ROC curve increased from 0.90 to 0.95 after AI assistance, indicating improved overall diagnostic discrimination.

Benefits were observed across clinician experience levels, though the greatest improvements were seen among less experienced practitioners including emergency medicine residents and general practitioners. AI assistance appeared to help most with subtle fractures that are typically challenging, such as occult hip fractures, scaphoid fractures, and stress fractures.

The review also noted that AI assistance did not significantly increase false positive rates, suggesting that clinicians appropriately weighed AI recommendations against their own clinical judgment rather than blindly accepting all AI-flagged findings. This evidence supports the implementation of AI as a complementary tool in fracture diagnosis workflows.`,
    mediumSummary: `A meta-analysis of 26 studies found that AI assistance improved fracture detection sensitivity from 77% to 87%, with AUC improving from 0.90 to 0.95. The greatest benefits were seen among less experienced practitioners and for subtle fractures like occult hip and scaphoid fractures. Importantly, false positive rates did not significantly increase, indicating clinicians appropriately balanced AI recommendations with clinical judgment.`,
    shortSummary: `AI assistance improves fracture detection sensitivity from 77% to 87% across 26 studies, with the greatest benefit for less experienced clinicians and subtle fractures, without increasing false positives.`,
  },
  {
    title: "Automated subcutaneous fat segmentation with CNN in MR-guided HIFU treatment for uterine fibroids",
    shortTitle: "Fat Segmentation",
    category: "Medical Imaging",
    subCategory: "Fat Segmentation",
    authorName: "Bing C, Laaksonen A, et al.",
    sourceUrl: "https://doi.org/10.1080/02656736.2026.2634734",
    publishedAt: new Date("2026-02-26"),
    fullContent: `This study develops an attention-gated U-Net convolutional neural network for automated segmentation of subcutaneous fat in MR-guided high-intensity focused ultrasound (HIFU) treatment planning for uterine fibroids. Accurate delineation of the subcutaneous fat layer is critical for HIFU treatment because the fat layer affects ultrasound beam propagation and energy deposition.

Manual segmentation of subcutaneous fat from MRI volumes is time-consuming and subject to inter-operator variability, typically requiring approximately 3 minutes per patient. The proposed attention-gated U-Net automates this process by learning to focus on relevant anatomical boundaries while suppressing irrelevant background features.

The model achieved a Dice coefficient of 0.972, indicating near-perfect overlap with expert manual segmentations. Processing time was reduced from 3 minutes to approximately 3 seconds per patient, representing a 60-fold speedup that can significantly improve clinical workflow efficiency.

The attention gating mechanism proved particularly valuable for handling anatomical variations in fat distribution across patients and for maintaining accuracy at tissue boundaries where subcutaneous fat interfaces with muscle and skin layers. This automated approach enables more consistent treatment planning and could facilitate wider adoption of MR-guided HIFU for uterine fibroid treatment.`,
    mediumSummary: `An attention-gated U-Net automates subcutaneous fat segmentation for MR-guided HIFU treatment of uterine fibroids, achieving 0.972 Dice coefficient. Processing time dropped from 3 minutes to 3 seconds per patient. The attention mechanism handles anatomical variations in fat distribution and maintains accuracy at tissue boundaries. This 60-fold speedup could facilitate wider adoption of MR-guided HIFU for fibroid treatment.`,
    shortSummary: `An attention-gated U-Net achieves 0.972 Dice coefficient for automated subcutaneous fat segmentation in HIFU treatment planning, reducing processing time from 3 minutes to 3 seconds.`,
  },
  {
    title: "Deep learning diagnosis model of spinal tuberculosis based on CT bone window gradient attention mechanism",
    shortTitle: "Spinal TB",
    category: "Medical Imaging",
    subCategory: "Spinal TB",
    authorName: "Mo S, Liu C, et al.",
    sourceUrl: "https://doi.org/10.1080/24699322.2025.2599329",
    publishedAt: new Date("2025-12-29"),
    fullContent: `This multicenter study develops an end-to-end deep learning diagnostic model for spinal tuberculosis using CT bone window images enhanced with a gradient attention mechanism. The study included 1027 patients from multiple centers, addressing the clinical need for accurate and rapid spinal TB diagnosis particularly in resource-limited settings where the disease remains prevalent.

Spinal tuberculosis accounts for approximately half of all musculoskeletal TB cases and can lead to severe complications including spinal cord compression and paralysis if not diagnosed early. Conventional diagnosis relies on a combination of clinical presentation, imaging interpretation by experienced radiologists, and laboratory tests, which may not be readily available in endemic regions.

The gradient attention mechanism enables the model to focus on diagnostically relevant bone window features while progressively refining its attention across network layers. This hierarchical attention approach captures both local bone destruction patterns and global spinal alignment changes characteristic of TB.

The model achieved an internal validation AUC of 0.920 and external validation AUCs ranging from 0.866 to 0.941 across independent test centers, demonstrating robust generalizability. These results suggest the model could serve as an effective screening tool in settings where specialist radiological expertise is scarce, potentially accelerating diagnosis and treatment initiation.`,
    mediumSummary: `A multicenter deep learning model (n=1027) diagnoses spinal tuberculosis from CT bone window images using a gradient attention mechanism. The model achieved 0.920 internal AUC and 0.866-0.941 external AUC across independent centers. The hierarchical attention captures both local bone destruction patterns and global spinal alignment changes. This could serve as an effective screening tool in endemic regions where specialist radiology expertise is limited.`,
    shortSummary: `A multicenter deep learning model for spinal tuberculosis diagnosis achieves 0.920 internal AUC and up to 0.941 external AUC on CT images, enabling screening in resource-limited endemic regions.`,
  },
  {
    title: "Reinforcement learning for medical image analysis: algorithms, challenges, and clinical deployment",
    shortTitle: "RL in Imaging",
    category: "Medical Imaging",
    subCategory: "Reinforcement Learning",
    authorName: "Sampa MB, Abdul Aziz NH, et al.",
    sourceUrl: "https://doi.org/10.1080/24699322.2025.2597553",
    publishedAt: new Date("2025-12-26"),
    fullContent: `This systematic review examines the application of reinforcement learning (RL) to medical image analysis, proposing a unified RLMI framework with four components: state representation, policy optimization, reward formulation, and environment modeling. Unlike supervised learning approaches that dominate medical imaging AI, RL methods learn through interaction and feedback, offering unique advantages for sequential decision-making tasks.

The review identifies key application areas where RL shows particular promise: landmark detection in anatomical images, object localization for surgical planning, view planning in ultrasound acquisition, and adaptive image segmentation where the algorithm iteratively refines boundaries based on reward signals.

State representation strategies vary from raw pixel inputs to learned feature embeddings, with the review finding that hybrid approaches combining handcrafted anatomical features with learned representations tend to perform best. Reward formulation remains a critical challenge, as clinical image analysis often involves multi-objective optimization where different quality metrics may conflict.

The review identifies barriers to clinical deployment including sample efficiency (RL typically requires many interactions to learn), safety constraints in medical settings, and the difficulty of defining appropriate reward functions that align with clinical objectives. The authors propose standardized benchmarks and evaluation protocols to accelerate progress in this emerging intersection of RL and medical imaging.`,
    mediumSummary: `A systematic review of reinforcement learning in medical imaging proposes a unified RLMI framework with four components: state representation, policy optimization, reward formulation, and environment modeling. Key applications include landmark detection, surgical planning, ultrasound view planning, and adaptive segmentation. Hybrid feature representations perform best, while reward formulation for multi-objective clinical optimization remains challenging. Barriers include sample efficiency and safety constraints.`,
    shortSummary: `A systematic review proposes a unified framework for reinforcement learning in medical imaging, identifying landmark detection, surgical planning, and adaptive segmentation as key applications with deployment barriers around safety and sample efficiency.`,
  },
  {
    title: "MRI enhancement and segmentation using deep learning denoising for dynamic cerebral angiography",
    shortTitle: "MRI Enhancement",
    category: "Medical Imaging",
    subCategory: "Brain MRI",
    authorName: "Herrera D, Ochoa-Ruiz G, et al.",
    sourceUrl: "https://doi.org/10.1007/s13755-025-00406-x",
    publishedAt: new Date("2025-12-05"),
    fullContent: `This study develops a denoising pipeline for infant brain vascular imaging using deep learning methods to enhance MRI quality for dynamic cerebral angiography. Infant brain imaging presents unique challenges due to smaller vascular structures, motion artifacts, and lower signal-to-noise ratios compared to adult imaging.

The researchers evaluated multiple self-supervised denoising approaches including Noise2Void and Parametric Probabilistic Noise2Void with Gaussian Mixture Models (PPN2V GMM), which do not require paired clean-noisy training data. This is particularly important for infant brain imaging where clean reference images are rarely available.

The PPN2V GMM and Noise2Void methods produced the best outcomes, achieving a 9.4% improvement in Dice score for subsequent vessel segmentation compared to processing non-denoised images. This improvement in segmentation accuracy directly translates to better visualization of infant cerebral vasculature for clinical assessment.

The pipeline demonstrates that self-supervised denoising can serve as an effective preprocessing step that improves downstream segmentation performance without requiring additional labeled training data. This approach is particularly valuable in pediatric neuroimaging where data scarcity and annotation difficulty limit the applicability of fully supervised methods.`,
    mediumSummary: `A deep learning denoising pipeline improves infant brain vascular MRI for dynamic cerebral angiography. Self-supervised methods Noise2Void and PPN2V GMM achieved 9.4% improvement in vessel segmentation Dice score without requiring paired clean-noisy training data. The pipeline addresses unique infant imaging challenges including smaller vessels, motion artifacts, and low SNR. Self-supervised denoising serves as an effective preprocessing step for pediatric neuroimaging where labeled data is scarce.`,
    shortSummary: `Self-supervised deep learning denoising improves infant brain vascular MRI segmentation by 9.4% in Dice score, addressing data scarcity challenges in pediatric neuroimaging without requiring paired training data.`,
  },
  {
    title: "Predicting transcranial ultrasound insertion loss using skull CT: A deep learning approach",
    shortTitle: "Skull Ultrasound",
    category: "Medical Imaging",
    subCategory: "Transcranial Ultrasound",
    authorName: "Wang N, Li H, et al.",
    sourceUrl: "https://doi.org/10.1016/j.ultras.2026.107976",
    publishedAt: new Date("2026-01-29"),
    fullContent: `This study presents a modified dual-path Inception neural network for predicting transcranial ultrasound insertion loss directly from skull CT images. Transcranial ultrasound applications including focused ultrasound surgery and neuromodulation require accurate estimation of how the skull attenuates and distorts ultrasound beams, which varies significantly between individuals.

Current gold-standard approaches use computationally expensive inhomogeneous acoustic simulations that model ultrasound propagation through patient-specific skull models derived from CT. While accurate, these simulations typically require approximately 15 minutes per patient, limiting their practicality for real-time treatment planning.

The deep learning model achieves prediction accuracy comparable to full inhomogeneous simulations but completes in approximately 0.5 seconds, representing an 1800-fold speedup. The dual-path architecture processes both local skull morphology features and global spatial relationships simultaneously, capturing the complex physics of ultrasound-skull interaction.

This dramatic acceleration could enable real-time transcranial ultrasound treatment planning, intraoperative adjustments, and broader screening for procedure eligibility. The approach demonstrates how deep learning can effectively approximate complex physics simulations when sufficient training data linking CT inputs to simulation outputs is available.`,
    mediumSummary: `A dual-path Inception neural network predicts transcranial ultrasound insertion loss from skull CT with accuracy comparable to full acoustic simulations but 1800 times faster (0.5 seconds vs 15 minutes). The architecture processes both local skull morphology and global spatial relationships. This speedup could enable real-time treatment planning for transcranial focused ultrasound surgery and neuromodulation, demonstrating deep learning as an effective proxy for complex physics simulations.`,
    shortSummary: `A deep learning model predicts transcranial ultrasound insertion loss from skull CT 1800 times faster than conventional simulations (0.5s vs 15min) while maintaining comparable accuracy.`,
  },
  {
    title: "Convolutional neural networks for prostate cancer detection, classification, and segmentation",
    shortTitle: "Prostate Cancer",
    category: "Medical Imaging",
    subCategory: "Prostate Cancer",
    authorName: "Gulmez B",
    sourceUrl: "https://doi.org/10.1016/j.ejro.2026.100741",
    publishedAt: new Date("2026-03-03"),
    fullContent: `This comprehensive analysis reviews 320 publications on CNN-based approaches for prostate cancer detection, classification, and segmentation. Prostate cancer is the second most common cancer in men worldwide, and accurate imaging-based characterization is essential for treatment planning and active surveillance decisions.

The review finds that Vision Transformer models achieved the highest classification accuracy among evaluated architectures, surpassing traditional CNN approaches for distinguishing clinically significant from indolent prostate cancer. For segmentation tasks, U-Net variants dominated the literature, with various attention and residual modifications improving delineation of tumor boundaries.

Multiparametric MRI (mpMRI) was the primary imaging modality in 42.5% of reviewed studies, reflecting its established role in prostate cancer diagnosis. T2-weighted imaging, diffusion-weighted imaging, and dynamic contrast-enhanced sequences each contribute complementary information that deep learning models can integrate more effectively than human readers.

The review identifies persistent challenges including limited generalizability across imaging protocols and scanner manufacturers, lack of standardized evaluation benchmarks, and the need for larger multi-institutional datasets with consistent pathological ground truth annotations. The authors call for greater focus on clinically meaningful endpoints rather than purely technical performance metrics.`,
    mediumSummary: `An analysis of 320 publications on CNNs for prostate cancer finds Vision Transformer models achieve highest classification accuracy while U-Net variants dominate segmentation tasks. Multiparametric MRI was the primary modality in 42.5% of studies. Key challenges include limited generalizability across imaging protocols, lack of standardized benchmarks, and insufficient multi-institutional datasets. The review calls for focus on clinically meaningful endpoints over technical metrics.`,
    shortSummary: `A review of 320 studies on CNNs for prostate cancer finds Vision Transformers lead in classification and U-Net variants dominate segmentation, with mpMRI used in 42.5% of studies.`,
  },
  {
    title: "Improved brain MRI quality and reduced acquisition time using deep learning reconstruction at 0.55T",
    shortTitle: "Low-Field MRI",
    category: "Medical Imaging",
    subCategory: "Brain MRI",
    authorName: "Saeed S, Nickel D, et al.",
    sourceUrl: "https://doi.org/10.1016/j.mri.2026.110656",
    publishedAt: new Date("2026-03-05"),
    fullContent: `This study evaluates deep learning reconstruction for improving brain MRI quality at low field strength (0.55T), demonstrating that DL algorithms can substantially compensate for the inherent signal limitations of lower-field systems. Low-field MRI systems are more affordable, portable, and accessible than conventional 1.5T and 3T scanners, making them attractive for expanding MRI access globally.

The DL reconstruction improved signal-to-noise ratio in gray matter from 40.83 to 106.30, a 2.6-fold enhancement that brings image quality closer to conventional higher-field acquisitions. This improvement was achieved without additional scan time, operating as a post-processing enhancement applied to standard acquisition protocols.

Furthermore, DL reconstruction enabled acquisition time reduction from 6 minutes 44 seconds to 3 minutes 6 seconds while maintaining diagnostic quality, representing a 54% time savings. Shorter scan times improve patient comfort, reduce motion artifacts, and increase scanner throughput.

The combination of enhanced image quality and reduced acquisition time addresses two of the main limitations of low-field MRI: inferior image quality and longer scan times needed to compensate for lower signal. These findings support the potential of AI-enhanced low-field MRI as a viable option for brain imaging in resource-constrained settings and point-of-care applications.`,
    mediumSummary: `Deep learning reconstruction at 0.55T MRI improved brain gray matter SNR from 40.83 to 106.30 (2.6-fold enhancement) while reducing acquisition time from 6:44 to 3:06 minutes. This compensates for inherent signal limitations of low-field systems, bringing quality closer to higher-field scanners. The 54% time savings improves patient comfort and scanner throughput. AI-enhanced low-field MRI could expand brain imaging access in resource-constrained settings.`,
    shortSummary: `Deep learning reconstruction boosts low-field (0.55T) brain MRI signal-to-noise ratio 2.6-fold while cutting scan time by 54%, making affordable MRI viable for resource-constrained settings.`,
  },
  {
    title: "Optimized hierarchical attention deep learning model for brain tissue classification",
    shortTitle: "Brain Tumors",
    category: "Medical Imaging",
    subCategory: "Brain Tissue Classification",
    authorName: "V S Divya Sundar, V Vijayachamundeeswari",
    sourceUrl: "https://doi.org/10.1016/j.jneumeth.2026.110724",
    publishedAt: new Date("2026-02-23"),
    fullContent: `This study presents a novel ResFAU-net segmentation architecture combined with a Hierarchical Attention Multi-Class (HAMC) classifier for brain tissue classification from MRI. The model addresses the challenge of accurately distinguishing between normal brain tissue, low-grade gliomas, and high-grade gliomas, which is critical for treatment planning and prognosis.

The ResFAU-net architecture incorporates residual connections, feature attention modules, and U-net skip connections in a unified framework. The feature attention mechanism allows the network to selectively emphasize diagnostically relevant image regions while suppressing noise and irrelevant anatomical features.

On the BRATS2020 benchmark dataset, the model achieved an Intersection over Union (IoU) of 96.29% and classification accuracy of 99.03%, representing state-of-the-art performance. The hierarchical attention mechanism operates at multiple spatial scales, capturing both fine-grained cellular patterns and broader structural features associated with different tumor grades.

The dual-stage approach of segmentation followed by classification mirrors clinical workflow, where radiologists first delineate tumor boundaries and then characterize the identified regions. This alignment with clinical practice may facilitate adoption and interpretability. The results demonstrate that attention-based architectures can achieve near-perfect brain tissue classification when properly designed for the hierarchical nature of medical image features.`,
    mediumSummary: `A novel ResFAU-net with Hierarchical Attention Multi-Class classifier achieves 96.29% IoU and 99.03% accuracy on BRATS2020 for brain tissue classification. The architecture combines residual connections, feature attention, and U-net skip connections. Hierarchical attention operates at multiple spatial scales, capturing both cellular patterns and structural features. The segmentation-then-classification approach mirrors clinical radiologist workflow, facilitating adoption.`,
    shortSummary: `A ResFAU-net with hierarchical attention achieves 96.29% IoU and 99.03% accuracy on BRATS2020 for brain tissue classification, combining multi-scale attention with a clinically aligned workflow.`,
  },

  // ============================================================
  // AI ETHICS (8 articles)
  // ============================================================
  {
    title: "Ethical concerns and strategies for implementing artificial intelligence in healthcare",
    shortTitle: "Ethics Framework",
    category: "AI Ethics",
    subCategory: "Trustworthiness",
    authorName: "Wubineh BZ, Deriba FG, Gemeda FW",
    sourceUrl: "https://doi.org/10.1186/s12910-026-01404-8",
    publishedAt: new Date("2026-02-07"),
    fullContent: `This systematic review identifies and categorizes ethical concerns in healthcare AI implementation, organizing findings into six key concern areas: Transparency and Trust, Bias and Fairness, Privacy and Data Security, Accountability, Ethical and Moral considerations, and Regulatory and Legal frameworks.

Transparency and trust emerged as foundational concerns, with healthcare providers and patients alike expressing discomfort with black-box AI systems that cannot explain their reasoning. The review found that explainability requirements vary by clinical context, with high-stakes decisions like cancer diagnosis demanding greater transparency than administrative applications.

Bias and fairness concerns centered on training data that underrepresents minority populations, leading to AI systems that perform worse for historically marginalized groups. The review catalogues documented examples of algorithmic bias in dermatology, cardiology, and nephrology, where skin color, gender, and race have influenced model accuracy.

Privacy and data security concerns span the full AI lifecycle from data collection through model deployment. The review emphasizes that consent frameworks designed for traditional research are inadequate for AI development, which may use patient data in ways not foreseeable at the time of collection. The authors propose a multi-stakeholder governance framework that integrates ethical review at each stage of AI development and deployment.`,
    mediumSummary: `A systematic review identifies six ethical concern categories in healthcare AI: Transparency/Trust, Bias/Fairness, Privacy/Data Security, Accountability, Ethical/Moral, and Regulatory/Legal. Explainability requirements vary by clinical context and stakes level. Documented algorithmic bias exists across dermatology, cardiology, and nephrology. Current consent frameworks are inadequate for AI development. The authors propose multi-stakeholder governance integrating ethical review at each development stage.`,
    shortSummary: `A systematic review categorizes healthcare AI ethics into six areas including transparency, bias, privacy, and accountability, proposing multi-stakeholder governance across the full AI development lifecycle.`,
  },
  {
    title: "Transforming Public Health Practice with AI: A Framework-Driven Approach",
    shortTitle: "Public Health AI",
    category: "AI Ethics",
    subCategory: "Health Equity",
    authorName: "Oleribe OO, Uzoaru F, et al.",
    sourceUrl: "https://doi.org/10.3390/healthcare14030385",
    publishedAt: new Date("2026-02-03"),
    fullContent: `This paper proposes a comprehensive framework for inclusive AI development in public health, addressing the growing gap between AI's technological potential and its equitable deployment across diverse populations and settings. Public health applications of AI span disease surveillance, outbreak prediction, health behavior modeling, and resource allocation, but current implementations often fail to serve the populations most in need.

The framework covers four pillars: personalized interventions using AI to tailor public health messaging and programs to community-specific needs; democratizing access by designing AI tools that work in low-resource settings with limited connectivity and computing infrastructure; ethical practices that ensure community consent, data sovereignty, and protection against surveillance overreach; and environmental health resilience using AI for climate-health monitoring.

A key contribution is the emphasis on participatory design, where affected communities are involved in defining problems, providing data, and evaluating AI outputs. This approach contrasts with top-down development models where AI tools are designed in high-resource settings and deployed in communities without meaningful input.

The authors highlight successful case studies from sub-Saharan Africa and South Asia where community-driven AI applications in maternal health, infectious disease surveillance, and nutrition monitoring have achieved better outcomes than externally designed interventions. They argue that sustainable public health AI requires building local technical capacity alongside deploying technology.`,
    mediumSummary: `A framework for inclusive AI in public health covers four pillars: personalized interventions, democratized access for low-resource settings, ethical practices with community consent, and environmental health resilience. The paper emphasizes participatory design where affected communities shape AI development. Case studies from sub-Saharan Africa and South Asia show community-driven AI outperforms externally designed interventions. Building local technical capacity is essential for sustainability.`,
    shortSummary: `A public health AI framework emphasizes participatory community design, democratized access for low-resource settings, and local capacity building, with successful case studies from sub-Saharan Africa and South Asia.`,
  },
  {
    title: "The Algorithmic Divide: AI-Driven Racial Disparities in Healthcare",
    shortTitle: "Racial Bias",
    category: "AI Ethics",
    subCategory: "Racial Disparities",
    authorName: "Haider SA, Borna S, et al.",
    sourceUrl: "https://doi.org/10.1007/s40615-024-02237-0",
    publishedAt: new Date("2024-12-18"),
    fullContent: `This systematic review of 30 articles examines the association between AI utilization in healthcare and racial disparities, finding significant evidence that AI systems can exacerbate existing inequities, particularly affecting Black and Hispanic populations.

The review documents multiple pathways through which AI perpetuates or amplifies racial disparities. Training data bias is the most commonly identified mechanism, where datasets that underrepresent minority populations lead to models with lower accuracy for these groups. This is compounded by the use of race-adjusted clinical algorithms that embed historical disparities into baseline assumptions.

Clinical domains where AI-driven disparities were most prominent include dermatology (where models trained predominantly on light-skinned patients show reduced accuracy for darker skin tones), cardiology (where risk prediction models underestimate cardiovascular risk in Black patients), and nephrology (where eGFR calculations using race-based adjustments have been embedded into AI systems).

The review also identifies structural factors including the digital divide limiting minority access to AI-powered health technologies, lack of diversity in AI development teams, and insufficient regulatory requirements for equity testing. The authors call for mandatory bias auditing, diverse dataset requirements, and community oversight of healthcare AI deployment to prevent AI from deepening the racial health gap.`,
    mediumSummary: `A systematic review of 30 articles finds AI in healthcare significantly exacerbates racial disparities, especially for Black and Hispanic populations. Key mechanisms include training data bias, race-adjusted algorithms embedding historical disparities, and the digital divide. Disparities are most prominent in dermatology, cardiology, and nephrology. The authors call for mandatory bias auditing, diverse dataset requirements, and community oversight of healthcare AI.`,
    shortSummary: `A review of 30 studies finds AI in healthcare exacerbates racial disparities for Black and Hispanic populations through biased training data and race-adjusted algorithms, calling for mandatory bias auditing.`,
  },
  {
    title: "Federated Learning in Healthcare Ethics: Privacy-Preserving and Equitable Medical AI",
    shortTitle: "Federated Learning",
    category: "AI Ethics",
    subCategory: "Federated Learning",
    authorName: "Mir BA, Abbas SR, Lee SW",
    sourceUrl: "https://doi.org/10.3390/healthcare14030306",
    publishedAt: new Date("2026-01-26"),
    fullContent: `This review of 38 studies examines the ethical dimensions of federated learning in healthcare, organizing findings into four themes: algorithmic fairness, privacy protection, governance models, and equitable resource distribution. Federated learning has been proposed as a solution to healthcare AI's data sharing challenges, but it introduces its own ethical complexities.

Algorithmic fairness in federated settings is complicated by the non-IID (non-independently and identically distributed) nature of healthcare data across institutions. Hospitals serving different demographic populations contribute heterogeneous data that can lead to federated models favoring well-represented groups. Fairness-aware aggregation strategies are an active research area but remain immature.

Privacy protection through federated learning is not absolute. The review documents emerging attack vectors including gradient inversion attacks, membership inference, and model poisoning that can compromise patient privacy even without direct data sharing. Differential privacy and secure aggregation provide additional safeguards but introduce accuracy-privacy tradeoffs.

Governance challenges include determining how to handle disagreements between participating institutions, managing intellectual property from collaborative models, and establishing accountability when federated models cause harm. The review proposes a tiered governance framework that balances institutional autonomy with collective responsibility for the safety and equity of federated healthcare AI systems.`,
    mediumSummary: `A review of 38 studies on federated learning ethics in healthcare identifies four themes: algorithmic fairness, privacy protection, governance, and equitable resources. Non-IID data across institutions can create fairness issues favoring well-represented groups. Privacy is not absolute, with gradient inversion and membership inference attacks possible. Governance challenges include institutional disagreements and accountability for harm. A tiered governance framework is proposed balancing autonomy with collective responsibility.`,
    shortSummary: `A review of 38 studies reveals federated learning in healthcare introduces ethical complexities around fairness with non-IID data, residual privacy attack vectors, and governance challenges requiring tiered frameworks.`,
  },
  {
    title: "Building Fair and Trustworthy Biomedical AI: A Tool for Identifying Key Decision Points",
    shortTitle: "Trustworthy AI",
    category: "AI Ethics",
    subCategory: "Bias & Fairness",
    authorName: "Foti N, Shim JK, et al.",
    sourceUrl: "https://doi.org/10.1142/9789819824755_0042",
    publishedAt: new Date("2026-01-01"),
    fullContent: `This paper presents the Trustworthy AI Decision Map, a practical tool that identifies key decision points across the AI lifecycle where choices can influence the fairness, reliability, and trustworthiness of biomedical AI systems. Unlike abstract ethical frameworks, the Decision Map provides concrete guidance for development teams at each stage from problem formulation through deployment and monitoring.

The Decision Map organizes critical choices into phases: problem definition (who defines the clinical need and whose perspectives are included), data collection (what populations are represented and how consent is obtained), model development (which fairness metrics are optimized and how tradeoffs are resolved), validation (against which benchmarks and for which subpopulations), and deployment (with what monitoring and recourse mechanisms).

A case study applying the Decision Map to a rural healthcare AI initiative illustrates how the tool surfaces implicit assumptions and potential equity issues that might otherwise go unaddressed. For example, the case study revealed that the chosen training dataset underrepresented rural patients, that the validation protocol did not test performance for Indigenous populations, and that deployment plans lacked mechanisms for community feedback.

The authors argue that embedding structured ethical decision-making into the technical development process is more effective than post-hoc ethics review, as many consequential choices are made early in development when they are most easily modified.`,
    mediumSummary: `The Trustworthy AI Decision Map identifies key decision points across the AI lifecycle affecting fairness and reliability of biomedical AI. It organizes choices into phases from problem definition through deployment with concrete guidance at each stage. A rural healthcare case study revealed hidden equity issues including underrepresented populations and missing community feedback mechanisms. The tool embeds ethical decision-making into technical development rather than relying on post-hoc review.`,
    shortSummary: `A Trustworthy AI Decision Map provides concrete guidance at each AI lifecycle stage, with a rural healthcare case study revealing hidden equity issues in data, validation, and deployment.`,
  },
  {
    title: "Rethinking fairness in AI to improve current practice in oncology",
    shortTitle: "Oncology Fairness",
    category: "AI Ethics",
    subCategory: "Bias & Fairness",
    authorName: "Konate S, Gallifant J, et al.",
    sourceUrl: "https://doi.org/10.1016/j.trecan.2025.11.005",
    publishedAt: new Date("2025-12-02"),
    fullContent: `This paper argues that fairness in AI for oncology is currently assessed using fundamentally flawed metrics, and that ground truth labels, predictions, and demographic attributes all carry biases that undermine conventional fairness evaluations. The authors challenge the common assumption that achieving equal performance metrics across demographic groups constitutes fairness.

The core argument is that cancer ground truth labels themselves reflect existing healthcare disparities. Late-stage diagnoses more common in underserved populations, screening biases that determine who gets diagnosed, and treatment access disparities that affect survival outcomes all contaminate the labels used to train and evaluate AI models. An AI system perfectly trained on biased labels will perpetuate those biases while appearing fair by conventional metrics.

Demographic attributes used for fairness evaluation are also problematic. Self-reported race categories conflate genetic ancestry, socioeconomic factors, and lived experiences of discrimination in ways that obscure the true sources of health disparities. Binary gender classifications miss important biological and social factors affecting cancer outcomes.

The authors propose moving beyond equal performance metrics toward substantive fairness that considers whether AI systems actually reduce health disparities in practice. This requires longitudinal outcome studies, community-defined fairness criteria, and integration of social determinants of health into AI evaluation frameworks rather than simplistic demographic stratification.`,
    mediumSummary: `A critique of current AI fairness metrics in oncology argues that ground truth labels, predictions, and demographic attributes all embed biases from healthcare disparities. Late-stage diagnoses in underserved populations and screening biases contaminate training labels. Self-reported race conflates genetic, socioeconomic, and discrimination factors. The authors advocate for substantive fairness measured by actual health disparity reduction rather than equal performance metrics across demographic groups.`,
    shortSummary: `A paper argues that fairness metrics in oncology AI are fundamentally flawed because ground truth labels themselves embed healthcare disparities, calling for outcome-based fairness evaluation.`,
  },
  {
    title: "The ethics and governance of large language models in dentistry",
    shortTitle: "Dental LLM Ethics",
    category: "AI Ethics",
    subCategory: "Privacy",
    authorName: "Rokhshad R, Tichy A, et al.",
    sourceUrl: "https://doi.org/10.1016/j.jdent.2025.106187",
    publishedAt: new Date("2025-10-21"),
    fullContent: `This E-Delphi study with 105 expert participants establishes a comprehensive ethical and governance framework for large language models in dental practice. Through iterative survey rounds, the experts reached consensus on a 9-topic framework: Data Protection, Copyright, Gender Bias, Fairness, Transparency, Explainability, Autonomy, Prudence, and Generative Empathy.

Data Protection emerged as the highest-priority concern, with experts emphasizing that patient dental records used for LLM training or fine-tuning require explicit consent and robust de-identification beyond what current regulations mandate. The potential for LLMs to memorize and reproduce training data poses unique risks for patient confidentiality.

Gender Bias and Fairness topics highlighted that dental AI systems may perpetuate disparities in treatment recommendations based on gender, race, and socioeconomic status if not carefully audited. The experts noted that dental literature itself contains historical biases that LLMs will absorb and amplify without targeted mitigation.

Generative Empathy was identified as a novel ethical dimension specific to LLMs. The ability of chatbots to simulate empathetic communication with dental patients raises questions about authenticity, patient deception, and the appropriate boundaries of AI-mediated therapeutic communication. The framework provides dental professionals and regulators with structured guidance for responsible LLM integration into clinical practice.`,
    mediumSummary: `An E-Delphi study with 105 experts establishes a 9-topic LLM governance framework for dentistry: Data Protection, Copyright, Gender Bias, Fairness, Transparency, Explainability, Autonomy, Prudence, and Generative Empathy. Data protection is the top concern, with LLM memorization posing unique confidentiality risks. Gender and racial biases in dental literature may be amplified. Generative Empathy raises novel questions about authenticity in AI-patient communication.`,
    shortSummary: `A 105-expert Delphi study creates a 9-topic LLM ethics framework for dentistry, identifying data protection and a novel "Generative Empathy" dimension as key governance concerns.`,
  },
  {
    title: "Artificial intelligence in healthcare research: Research ethics perspective",
    shortTitle: "Research Ethics",
    category: "AI Ethics",
    subCategory: "Research Ethics",
    authorName: "Hey CY, Kulkarni S",
    sourceUrl: "https://doi.org/10.1002/bcp.70395",
    publishedAt: new Date("2025-12-07"),
    fullContent: `This paper examines ethical challenges at the intersection of AI and healthcare research, articulating key principles that should guide the responsible development and deployment of AI in clinical research settings. The analysis addresses how traditional research ethics frameworks must evolve to accommodate the unique characteristics of AI-driven research.

Five key principles are identified: justice, ensuring that AI research benefits are distributed equitably and research burdens do not disproportionately fall on vulnerable populations; data stewardship, maintaining the integrity, security, and appropriate use of health data throughout the AI research lifecycle; explainability, ensuring that AI methods and outputs can be understood by researchers, clinicians, and ethics committees.

Accountability addresses who bears responsibility when AI-driven research produces harmful outcomes, noting that the distributed nature of AI development across data providers, model developers, and clinical implementers complicates traditional attribution of responsibility. Sustainability examines the environmental costs of training large AI models and the long-term viability of AI research infrastructure.

The authors argue that existing institutional review board frameworks need augmentation with AI-specific expertise and evaluation criteria. They propose that research ethics committees should assess not only the direct risks of AI research but also downstream consequences including model reuse, dataset perpetuation, and unintended deployment of research-stage models in clinical settings.`,
    mediumSummary: `An examination of AI ethics in healthcare research identifies five key principles: justice in benefit distribution, data stewardship throughout the AI lifecycle, explainability for researchers and ethics committees, accountability across distributed development teams, and sustainability including environmental costs. The paper argues IRB frameworks need AI-specific expertise to evaluate downstream consequences including model reuse and unintended clinical deployment of research-stage tools.`,
    shortSummary: `A research ethics analysis identifies five key principles for AI in healthcare research: justice, data stewardship, explainability, accountability, and sustainability, calling for AI-specific IRB expertise.`,
  },

  // ============================================================
  // WEARABLES & DIAGNOSTICS (8 articles)
  // ============================================================
  {
    title: "From data to diagnosis: comprehensive review of ML-driven wearable sensors in healthcare",
    shortTitle: "Wearable Sensors",
    category: "Wearables & Diagnostics",
    subCategory: "Biosensors",
    authorName: "Zhao M, Liu R, et al.",
    sourceUrl: "https://doi.org/10.1016/j.bioelechem.2026.109228",
    publishedAt: new Date("2026-01-12"),
    fullContent: `This comprehensive review examines the convergence of machine learning and wearable biosensor technology across health monitoring, early disease detection, and precision medicine applications. Wearable sensors have evolved from simple step counters to sophisticated multimodal platforms capable of continuously measuring biochemical, biophysical, and behavioral signals.

The review categorizes ML-driven biosensor applications by clinical domain: cardiovascular monitoring using ECG and PPG wearables with arrhythmia detection algorithms; metabolic monitoring through continuous glucose and lactate sensors with predictive models; neurological assessment via EEG headbands and tremor sensors with movement disorder classifiers; and respiratory monitoring through chest-worn accelerometers and airflow sensors.

Emerging paradigms discussed include federated learning for privacy-preserving model training across wearable device networks, quantum machine learning for processing high-dimensional sensor data, and neural interface technologies that directly decode brain signals for diagnostic and therapeutic purposes. These next-generation approaches promise to address current limitations around data privacy, computational constraints, and diagnostic specificity.

The authors identify key challenges including sensor drift requiring recalibration, motion artifact management, battery life constraints, and the need for regulatory frameworks that accommodate continuously learning algorithms deployed on consumer devices. They emphasize that clinical validation studies must move beyond controlled laboratory settings to real-world free-living conditions.`,
    mediumSummary: `A comprehensive review of ML-driven wearable sensors covers cardiovascular, metabolic, neurological, and respiratory monitoring applications. Emerging paradigms include federated learning for privacy-preserving training, quantum ML for high-dimensional sensor data, and neural interfaces. Key challenges include sensor drift, motion artifacts, battery life, and regulatory frameworks for continuously learning algorithms. Clinical validation must move from lab settings to real-world free-living conditions.`,
    shortSummary: `A review of ML-driven wearable sensors spans cardiovascular to neurological monitoring, highlighting emerging federated learning and quantum ML paradigms while identifying sensor drift and regulation as key challenges.`,
  },
  {
    title: "Dual-scale bionic sensor with high stretchability for AI-enabled squatting motion monitoring",
    shortTitle: "Motion Sensing",
    category: "Wearables & Diagnostics",
    subCategory: "Motion Sensing",
    authorName: "Zhang C, Wang F, et al.",
    sourceUrl: "https://doi.org/10.1016/j.bios.2026.118564",
    publishedAt: new Date("2026-02-27"),
    fullContent: `This study presents a bionic honeycomb-shaped flexible sensor designed for monitoring squatting motion with AI-enabled analysis. The dual-scale architecture combines macro-level honeycomb structures for high stretchability with micro-level conductive networks for sensitive strain detection, mimicking the mechanical properties of natural tissues.

The sensor achieves remarkable stretchability exceeding 200% while maintaining stable electrical response, making it suitable for placement on high-deformation body regions like the knee joint. The honeycomb geometry distributes strain uniformly across the sensing area, preventing the localized failure modes that plague conventional flexible sensors.

A decision tree regressor maps the sensor's resistance changes to knee joint angles with 99.9% accuracy across the full range of squatting motion. Additionally, a neural network classifier achieves 100% accuracy in distinguishing between different squat types including partial squats, parallel squats, and deep squats.

The combination of high-performance material design with AI analytics enables clinical applications in rehabilitation monitoring, sports performance assessment, and ergonomic evaluation. The sensor's ability to operate without rigid components makes it comfortable for long-duration wear, addressing a key barrier to adoption of wearable motion monitoring systems in everyday settings.`,
    mediumSummary: `A bionic honeycomb-shaped flexible sensor monitors squatting motion with AI analytics. The dual-scale design achieves over 200% stretchability while maintaining stable electrical response. A decision tree maps resistance to knee angles with 99.9% accuracy, and a neural network classifies squat types with 100% accuracy. The comfortable, rigid-component-free design enables clinical applications in rehabilitation, sports performance, and ergonomic monitoring.`,
    shortSummary: `A bionic honeycomb flexible sensor with over 200% stretchability enables AI-powered squat monitoring, achieving 99.9% accuracy for knee angle mapping and 100% accuracy for squat type classification.`,
  },
  {
    title: "Recent advances in wearable biophysical sensors for continuous muscle monitoring",
    shortTitle: "Muscle Monitoring",
    category: "Wearables & Diagnostics",
    subCategory: "Muscle Monitoring",
    authorName: "Zheng R, Xu H",
    sourceUrl: "https://doi.org/10.1016/j.bios.2026.118463",
    publishedAt: new Date("2026-02-04"),
    fullContent: `This review covers recent advances in wearable sensor technologies for continuous muscle monitoring, spanning electrical, biomechanical, acoustic, and optical sensing modalities. Continuous muscle monitoring has applications in rehabilitation, sports medicine, occupational health, and neuromuscular disease management.

Surface electromyography (sEMG) sensors remain the most established approach, detecting electrical activity from muscle contractions through skin-mounted electrodes. Recent advances include dry electrode materials that eliminate conductive gel requirements, high-density arrays that provide spatial resolution of muscle activation patterns, and flexible printed electronics that conform to body contours.

Biomechanical sensors including strain and pressure transducers measure muscle displacement and force generation. Wearable ultrasound devices represent an emerging category that can visualize muscle architecture changes in real-time, providing information about fiber length, pennation angle, and cross-sectional area during movement.

Near-infrared spectroscopy (NIRS) devices offer non-invasive measurement of muscle oxygenation and blood flow, providing metabolic information that complements the mechanical and electrical data from other sensor modalities. The review emphasizes the trend toward multimodal sensor fusion, where machine learning algorithms integrate signals from multiple sensor types to provide more comprehensive and accurate muscle function assessments than any single modality alone.`,
    mediumSummary: `A review of wearable muscle monitoring sensors covers sEMG, strain/pressure, ultrasound, and NIRS modalities. Recent sEMG advances include dry electrodes, high-density arrays, and flexible printed electronics. Wearable ultrasound enables real-time visualization of muscle architecture during movement. NIRS provides metabolic oxygenation data. The trend is toward multimodal sensor fusion using ML to integrate signals from multiple modalities for comprehensive muscle assessment.`,
    shortSummary: `A review of wearable muscle monitoring covers sEMG, biomechanical, ultrasound, and NIRS sensors, highlighting the trend toward multimodal ML-based fusion for comprehensive muscle function assessment.`,
  },
  {
    title: "IoT face mask sensors with ionic liquid gel for wearable respiratory health monitoring",
    shortTitle: "Respiratory IoT",
    category: "Wearables & Diagnostics",
    subCategory: "Respiratory Monitoring",
    authorName: "Qing Z, Choi S, et al.",
    sourceUrl: "https://doi.org/10.1021/acsabm.5c01939",
    publishedAt: new Date("2026-02-17"),
    fullContent: `This study develops face mask-integrated ionic liquid gel (ILG) sensors connected to IoT infrastructure for wearable respiratory health monitoring. The sensors detect humidity changes during breathing cycles to characterize respiratory patterns, with AI algorithms identifying abnormal patterns including cough episodes with 91% accuracy.

The ILG sensors are fabricated directly into disposable face masks using screen-printing techniques, enabling low-cost mass production. The ionic liquid gel provides stable humidity sensing over extended wear periods without the drift issues common in polymer-based humidity sensors.

The IoT architecture transmits sensor data wirelessly to edge computing devices that perform real-time analysis of breathing rate, breathing depth, and respiratory event detection. This enables autonomous symptom tracking without requiring active patient participation, which is particularly valuable for monitoring elderly patients and those with chronic respiratory conditions.

The system demonstrated reliable cough detection in real-world conditions including walking, talking, and environmental humidity variations. The 91% cough detection accuracy represents a significant advance over previous face-mask sensor approaches that were validated only in controlled laboratory settings. The platform could serve as an early warning system for respiratory infections, COPD exacerbations, and post-surgical pulmonary complications.`,
    mediumSummary: `Face mask-integrated ionic liquid gel sensors with IoT connectivity monitor respiratory health by detecting humidity changes during breathing. AI identifies coughs with 91% accuracy in real-world conditions including walking and talking. The sensors are screen-printed onto disposable masks for low-cost production. The system enables autonomous symptom tracking for elderly patients and those with chronic respiratory conditions, serving as an early warning system for respiratory events.`,
    shortSummary: `IoT-connected face mask sensors using ionic liquid gel detect coughs with 91% accuracy in real-world conditions, enabling autonomous respiratory health monitoring for chronic disease and infection early warning.`,
  },
  {
    title: "Continuous glucose monitoring to stratify individuals without diabetes",
    shortTitle: "Glucose Monitoring",
    category: "Wearables & Diagnostics",
    subCategory: "Glucose Monitoring",
    authorName: "Sugimoto H, Sapir G, et al.",
    sourceUrl: "https://doi.org/10.1038/s43856-026-01523-8",
    publishedAt: new Date("2026-03-14"),
    fullContent: `This study analyzes continuous glucose monitoring (CGM) data from 8025 adults without diabetes to identify subgroups with distinct glycemic profiles and predict individualized postprandial glucose responses. The large-scale dataset provides unprecedented insight into glucose variability in the non-diabetic population.

Three key CGM features — mean glucose, glucose variance, and autocorrelation — were found to explain over 80% of interindividual differences in glycemic patterns. This dimensionality reduction from complex time-series data to three interpretable features enables practical stratification of individuals by metabolic phenotype.

Machine learning models trained on CGM data, dietary logs, and anthropometric measurements predicted postprandial glucose trajectories for individual meals. These predictions could enable personalized dietary recommendations that account for individual glucose metabolism differences rather than relying on one-size-fits-all dietary guidelines.

The study identifies a subset of non-diabetic individuals with glucose variability patterns resembling early metabolic dysfunction, suggesting that CGM-based screening could identify individuals at risk for future diabetes development before conventional fasting glucose or HbA1c tests become abnormal. This preventive application represents a shift from using CGM as a diabetes management tool to deploying it as a population-level metabolic screening technology.`,
    mediumSummary: `CGM data from 8025 non-diabetic adults reveals that three features (mean glucose, variance, autocorrelation) explain over 80% of interindividual glycemic differences. ML models predict postprandial glucose trajectories for personalized dietary recommendations. A subset of non-diabetic individuals shows glucose patterns resembling early metabolic dysfunction. CGM-based screening could identify diabetes risk before conventional tests become abnormal, shifting CGM from management to prevention.`,
    shortSummary: `Analysis of CGM data from 8025 non-diabetic adults shows three glucose features explain 80%+ of individual variation, with ML enabling personalized dietary guidance and early diabetes risk detection.`,
  },
  {
    title: "AI-Assisted Self-Powered Wearable Dual-Mode Sensor for Neurological Disorder Diagnostics",
    shortTitle: "Neuro Wearable",
    category: "Wearables & Diagnostics",
    subCategory: "Neurological Monitoring",
    authorName: "Li T, Liu H, et al.",
    sourceUrl: "https://doi.org/10.1002/advs.202522179",
    publishedAt: new Date("2026-03-12"),
    fullContent: `This study presents a wireless wearable sensor integrating optical strain sensing with a triboelectric nanogenerator (TENG) for self-powered neurological disorder diagnostics. The dual-mode sensing approach captures both fine motor tremor patterns (optical) and gross movement dynamics (triboelectric) simultaneously, providing complementary information for neurological assessment.

The triboelectric nanogenerator converts mechanical motion energy into electrical signals, eliminating the need for an external power source and enabling truly autonomous long-duration monitoring. This self-powered capability addresses a critical limitation of current wearable neurological monitoring devices that require frequent charging.

A CNN-LSTM deep learning model processes the dual-mode sensor data to distinguish between Parkinson's disease and stroke-related movement abnormalities with 94.23% accuracy. The convolutional layers extract spatial features from sensor signals while the LSTM layers capture temporal patterns characteristic of different neurological conditions.

The device was validated in clinical settings with neurological patients, demonstrating reliable performance during daily activities including walking, eating, and resting. The wireless design and small form factor support continuous home monitoring, potentially enabling earlier detection of disease progression and more responsive medication adjustment for neurological conditions.`,
    mediumSummary: `A self-powered wearable sensor combines optical strain sensing with a triboelectric nanogenerator for battery-free neurological monitoring. A CNN-LSTM model distinguishes Parkinson's disease from stroke with 94.23% accuracy using dual-mode data capturing fine tremor and gross movement patterns. The device was validated in clinical settings during daily activities. Wireless, self-powered design enables continuous home monitoring for early detection of disease progression.`,
    shortSummary: `A self-powered wearable sensor combining optical and triboelectric sensing uses CNN-LSTM deep learning to distinguish Parkinson's from stroke with 94.23% accuracy, enabling battery-free neurological monitoring.`,
  },
  {
    title: "Performance of Wearable Device-Based AI in Detecting Depression: Meta-Analysis",
    shortTitle: "Depression Detection",
    category: "Wearables & Diagnostics",
    subCategory: "Depression",
    authorName: "Liu J, Wang J, et al.",
    sourceUrl: "https://doi.org/10.2196/85319",
    publishedAt: new Date("2026-03-10"),
    fullContent: `This meta-analysis of 16 studies involving 1189 patients evaluates the diagnostic performance of wearable device-based AI for depression detection. Depression is one of the leading causes of disability worldwide, yet diagnosis relies primarily on subjective clinical interviews with known limitations in sensitivity and accessibility.

Wearable devices capture objective behavioral and physiological biomarkers associated with depression including sleep disruption patterns, reduced physical activity, altered heart rate variability, decreased social interactions, and changes in circadian rhythm regularity. AI algorithms analyze these multimodal signals to identify depressive states.

The pooled analysis found high diagnostic accuracy with sensitivity of 0.89, specificity of 0.93, and AUC of 0.96 across the included studies. Random forest models showed the best individual performance among the ML approaches evaluated, outperforming logistic regression, SVM, and neural network architectures in this domain.

The high performance metrics suggest that wearable-based depression screening could serve as a valuable complement to clinical assessment, particularly for longitudinal monitoring of patients at risk for recurrence and for reaching populations with limited access to mental health professionals. The authors note that current evidence is limited by small sample sizes and heterogeneous wearable devices, calling for larger multi-center validation studies.`,
    mediumSummary: `A meta-analysis of 16 studies (1189 patients) on wearable AI for depression detection found pooled sensitivity 0.89, specificity 0.93, and AUC 0.96. Wearables capture sleep disruption, reduced activity, altered heart rate variability, and circadian changes. Random forest models performed best among ML approaches. Wearable screening could complement clinical assessment for longitudinal monitoring, though larger multi-center validation is needed.`,
    shortSummary: `A meta-analysis of 16 studies finds wearable AI detects depression with 0.89 sensitivity, 0.93 specificity, and 0.96 AUC, with random forest models showing the best performance.`,
  },
  {
    title: "Mental Stress Detection Using Physiological Sensors and AI: A Review",
    shortTitle: "Stress Detection",
    category: "Wearables & Diagnostics",
    subCategory: "Stress Detection",
    authorName: "Al Abdi R, AlKaabi S, et al.",
    sourceUrl: "https://doi.org/10.3390/s26051616",
    publishedAt: new Date("2026-03-04"),
    fullContent: `This review examines the use of physiological sensors combined with AI methods for mental stress detection, covering galvanic skin response (GSR), electrocardiography (ECG), photoplethysmography (PPG), and electroencephalography (EEG) sensing modalities.

GSR sensors measure electrodermal activity reflecting sympathetic nervous system arousal, providing a direct indicator of stress response. ECG and PPG sensors capture heart rate variability features that are well-established biomarkers of autonomic nervous system balance, with reduced HRV consistently associated with elevated stress. EEG sensors detect changes in cortical brain activity patterns associated with stress processing.

The review evaluates various AI approaches for stress classification including traditional ML methods (SVM, random forest, k-nearest neighbors), ensemble models, and deep learning architectures. Ensemble methods combining multiple classifiers generally achieved the highest accuracy, leveraging the complementary information captured by different sensor modalities.

Key challenges identified include the subjective nature of stress ground truth labels, individual variability in physiological stress responses, motion artifact contamination during daily activities, and the lack of standardized stress induction protocols across studies. The authors recommend multimodal sensor fusion approaches and personalized adaptive models that calibrate to individual baseline physiological patterns for more robust real-world stress detection.`,
    mediumSummary: `A review of physiological sensor-based stress detection covers GSR, ECG, PPG, and EEG modalities combined with AI classification. Ensemble methods combining multiple classifiers achieved the highest accuracy by leveraging complementary multimodal information. Key challenges include subjective stress labels, individual physiological variability, and motion artifacts. The authors recommend multimodal sensor fusion and personalized adaptive models calibrated to individual baselines.`,
    shortSummary: `A review of AI-driven stress detection using GSR, ECG, PPG, and EEG sensors finds ensemble ML methods achieve the best accuracy, with personalized multimodal fusion recommended for real-world deployment.`,
  },

  // ============================================================
  // LLMs IN HEALTHCARE (9 articles)
  // ============================================================
  {
    title: "Large language models in dental diagnosis, decision-making, and communication",
    shortTitle: "Dental AI",
    category: "LLMs in Healthcare",
    subCategory: "Dental AI",
    authorName: "Kaplan TT, Akyol GE",
    sourceUrl: "https://doi.org/10.1016/j.jdsr.2026.01.002",
    publishedAt: new Date("2026-01-27"),
    fullContent: `This systematic review of 38 studies examines the use of large language models in dental practice across three domains: diagnosis, clinical decision-making, and patient communication. ChatGPT-3.5 was the most frequently studied model, reflecting its early availability and broad accessibility to dental practitioners.

In diagnostic applications, LLMs demonstrated reasonable accuracy in interpreting clinical scenarios and suggesting differential diagnoses for common dental conditions. However, performance varied significantly across dental subspecialties, with higher accuracy for well-documented conditions like dental caries and periodontal disease compared to rarer oral pathologies.

For clinical decision-making, LLMs showed potential in treatment planning by synthesizing patient history, clinical findings, and evidence-based guidelines. The models increased efficiency by rapidly generating comprehensive treatment options, though expert review remained essential to catch errors and ensure patient-specific factors were appropriately weighted.

Patient communication emerged as a particularly promising application, with LLMs generating clear, readable explanations of dental procedures and conditions at appropriate health literacy levels. The review cautions that LLMs carry risk of providing incorrect information presented with misleading confidence, and recommends that dental professionals validate all LLM outputs before patient-facing use.`,
    mediumSummary: `A systematic review of 38 studies on LLMs in dentistry finds ChatGPT-3.5 most commonly studied. LLMs show reasonable diagnostic accuracy for common dental conditions but variable performance for rare pathologies. Treatment planning efficiency improves with LLM support, though expert review remains essential. Patient communication is a particularly promising application, but the risk of confidently incorrect information requires professional validation before patient-facing use.`,
    shortSummary: `A review of 38 studies finds LLMs increase efficiency in dental diagnosis and treatment planning, with patient communication as the most promising application, though validation of outputs remains essential.`,
  },
  {
    title: "Large language models and conditional rules in clinical decision support systems",
    shortTitle: "Decision Support",
    category: "LLMs in Healthcare",
    subCategory: "Decision Support",
    authorName: "Sivasothy S, Bingham A, et al.",
    sourceUrl: "https://doi.org/10.1007/s13755-026-00428-z",
    publishedAt: new Date("2026-01-21"),
    fullContent: `This study evaluates LLMs and large reasoning models (LRMs) for generating conditional rules in clinical decision support systems, using COVID-19 triaging as a test case. Clinical decision support systems rely on rule-based logic to guide clinical workflows, but creating and maintaining these rules traditionally requires extensive manual effort from clinical informaticists.

The researchers tested multiple LLMs and LRMs on their ability to generate accurate triaging rules from clinical guidelines. LRMs achieved accuracy up to 81.70% in generating rules that correctly classified COVID-19 patient acuity levels based on clinical parameters including oxygen saturation, respiratory rate, and comorbidity profiles.

LLMs demonstrated an ability to generate feasible initial rule sets from unstructured clinical guideline text, significantly reducing the time and expertise needed to create CDSS rule bases. However, the generated rules required clinical validation and refinement, with common errors including overly broad classification criteria and missing edge cases for complex patient presentations.

The study concludes that LLMs can serve as accelerators for CDSS development rather than autonomous rule generators. The hybrid approach of LLM-generated initial rules followed by expert curation and validation offers a practical pathway for scaling CDSS deployment across clinical domains where rule authoring has been a bottleneck.`,
    mediumSummary: `LLMs and LRMs were tested for generating COVID-19 triaging rules in clinical decision support systems, with LRMs achieving up to 81.70% accuracy. LLMs can generate feasible initial rule sets from unstructured clinical guidelines, reducing manual effort. Common errors include overly broad criteria and missing edge cases. The hybrid approach of LLM-generated rules with expert curation offers a practical pathway for scaling CDSS development across clinical domains.`,
    shortSummary: `LLMs and reasoning models generate COVID-19 triaging rules with up to 81.70% accuracy, serving as accelerators for clinical decision support system development when combined with expert curation.`,
  },
  {
    title: "Reasoning with large language models in medicine: systematic review",
    shortTitle: "Medical Reasoning",
    category: "LLMs in Healthcare",
    subCategory: "Clinical Reasoning",
    authorName: "Mansoor I, Abdullah M, et al.",
    sourceUrl: "https://doi.org/10.1007/s13755-025-00403-0",
    publishedAt: new Date("2025-11-26"),
    fullContent: `This comprehensive systematic review evaluates the reasoning capabilities of large language models in medical contexts, covering GPT-4, PaLM, Med-PaLM, and BioGPT across clinical reasoning tasks. Medical reasoning requires the integration of pattern recognition, causal inference, probabilistic thinking, and domain knowledge in ways that challenge current LLM architectures.

The review categorizes reasoning enhancement techniques including prompt engineering strategies (chain-of-thought, self-consistency, tree-of-thought), few-shot learning with curated medical examples, and reinforcement learning from human feedback (RLHF) with clinical expert annotators. These techniques have progressively improved LLM performance on medical licensing examinations and clinical case evaluations.

GPT-4 and Med-PaLM 2 demonstrate the strongest medical reasoning among reviewed models, approaching or exceeding passing thresholds on medical board examinations across multiple specialties. However, the review identifies persistent failure modes including clinical hallucinations where models generate plausible-sounding but incorrect medical reasoning, anchoring bias where initial assessment errors propagate through subsequent reasoning steps, and difficulty with rare diseases and atypical presentations.

The review emphasizes the critical distinction between pattern-matching performance on standardized tests and genuine clinical reasoning capability. The authors call for evaluation frameworks that assess causal reasoning, handling of uncertainty, and appropriate escalation to human judgment in complex or ambiguous clinical scenarios.`,
    mediumSummary: `A systematic review of LLM medical reasoning covers GPT-4, PaLM, Med-PaLM, and BioGPT with enhancement techniques including chain-of-thought prompting, few-shot learning, and RLHF. GPT-4 and Med-PaLM 2 approach board exam passing thresholds. Persistent failure modes include clinical hallucinations, anchoring bias, and poor handling of rare diseases. The review distinguishes test performance from genuine clinical reasoning, calling for evaluation of causal reasoning and uncertainty handling.`,
    shortSummary: `A systematic review finds GPT-4 and Med-PaLM 2 approach medical board exam thresholds but exhibit clinical hallucinations and anchoring bias, highlighting the gap between test performance and genuine reasoning.`,
  },
  {
    title: "Empowering front-line physicians with AI: Evaluating LLMs in everyday ENT care",
    shortTitle: "ENT Care",
    category: "LLMs in Healthcare",
    subCategory: "ENT Care",
    authorName: "Hack S, Zalzal HG, et al.",
    sourceUrl: "https://doi.org/10.1016/j.ajem.2026.01.029",
    publishedAt: new Date("2026-01-19"),
    fullContent: `This study evaluates large language models for everyday ear, nose, and throat (ENT) care using 12 clinical vignettes assessed by 100 physicians. The study addresses whether LLMs can provide decision support for common ENT presentations that front-line physicians encounter in primary care and emergency medicine settings.

The 100 participating physicians achieved a baseline diagnostic accuracy of 91.6% across the 12 ENT clinical vignettes, reflecting the generally high competence of the physician cohort for these common presentations. LLMs showed comparable diagnostic accuracy while demonstrating higher referral appropriateness scores, suggesting the models may better identify cases warranting specialist consultation.

LLM performance was strongest for straightforward presentations with pathognomonic features and weaker for cases requiring integration of subtle examination findings or clinical history nuances. The models provided detailed differential diagnoses and management plans that physicians found useful as decision support aids, even when the primary diagnosis matched their own assessment.

The results suggest that LLMs can serve as effective second opinions for front-line physicians managing ENT conditions, potentially reducing unnecessary referrals for straightforward cases while improving appropriate specialist consultation for complex presentations. The authors emphasize that LLMs should complement rather than replace physician judgment, particularly for cases involving nuanced clinical examination findings.`,
    mediumSummary: `A study of 12 ENT clinical vignettes evaluated by 100 physicians found LLMs achieve comparable diagnostic accuracy to physicians (91.6% baseline) while showing higher referral appropriateness. LLMs excelled at straightforward presentations but struggled with subtle examination findings. The models provide useful differential diagnoses and management plans as second opinions. LLMs could reduce unnecessary ENT referrals while improving specialist consultation for complex cases.`,
    shortSummary: `LLMs match physician diagnostic accuracy (91.6%) for common ENT presentations while showing higher referral appropriateness, serving as effective second opinions for front-line physicians.`,
  },
  {
    title: "LLMs for LOINC mapping in laboratory medicine: ChatGPT-4.0 vs Gemini vs Perplexity",
    shortTitle: "Lab Medicine",
    category: "LLMs in Healthcare",
    subCategory: "Lab Medicine",
    authorName: "Yu S, Cho EJ, et al.",
    sourceUrl: "https://doi.org/10.1016/j.ijmedinf.2026.106270",
    publishedAt: new Date("2026-01-06"),
    fullContent: `This study evaluates three LLMs — ChatGPT-4.0, Gemini, and Perplexity — for mapping laboratory test items to Logical Observation Identifiers Names and Codes (LOINC), comparing their performance against six board-certified pathologists. LOINC mapping is essential for laboratory data interoperability but remains a labor-intensive process requiring specialized expertise.

Seventy-five laboratory test items spanning clinical chemistry, hematology, and immunology were mapped by each LLM and the expert panel. ChatGPT-4.0 achieved the highest match rate at 58.2% for clinical chemistry items, while performance was lower for hematology and immunology tests that require more nuanced understanding of analytical methods and specimen types.

The study reveals systematic patterns in LLM errors: models frequently selected LOINC codes with correct analyte names but incorrect method, specimen, or property fields. This suggests LLMs have strong concept recognition but lack the technical granularity needed for precise laboratory terminology mapping.

Human validation remains essential for LOINC mapping, as even the best-performing LLM left 41.8% of items requiring manual correction. However, the authors suggest that LLMs can significantly accelerate the mapping workflow by providing initial candidate codes that human experts then verify and refine, potentially reducing mapping time by 50% compared to fully manual processes.`,
    mediumSummary: `ChatGPT-4.0, Gemini, and Perplexity were tested for LOINC mapping of 75 lab tests against six board-certified pathologists. ChatGPT-4.0 achieved the highest match rate (58.2%) in clinical chemistry. LLMs frequently matched analyte names but missed method, specimen, or property fields. Human validation remains essential with 41.8% requiring correction, but LLMs could cut mapping time by 50% as initial candidate generators.`,
    shortSummary: `ChatGPT-4.0 achieves 58.2% LOINC mapping accuracy for clinical chemistry tests, outperforming Gemini and Perplexity but requiring human validation, potentially halving the manual mapping workflow.`,
  },
  {
    title: "Trust, truth and transparency: AI-generated surgical information references",
    shortTitle: "Surgical Info",
    category: "LLMs in Healthcare",
    subCategory: "Surgical Info",
    authorName: "Sidhu RS, Selvamogan A, Boddy A",
    sourceUrl: "https://doi.org/10.1308/rcsann.2026.0021",
    publishedAt: new Date("2026-03-18"),
    fullContent: `This study evaluates the quality and reliability of references generated by nine AI chatbots in response to surgical information queries. Six surgical prompts covering common procedures were posed to each chatbot, and the generated references were systematically evaluated for existence, accuracy, and relevance.

Hallucination rates varied dramatically across platforms, ranging from 0% to 34% of generated references being completely fabricated. This wide range highlights the significant differences in how AI platforms handle citation generation, with some relying on retrieval-augmented generation from indexed sources while others generate references from probabilistic language patterns.

Perplexity Research achieved the highest quality score of 4.08 out of 5, distinguished by its approach of citing sources from real-time web searches rather than generating references from model memory. Other platforms with direct search integration similarly showed lower hallucination rates.

The study raises important concerns about the trustworthiness of AI-generated medical information for both clinicians and patients. When chatbots provide fabricated references that appear legitimate, users may accept incorrect medical advice based on a false sense of evidence. The authors recommend that surgical information from AI chatbots should always be independently verified and that platforms should clearly distinguish between verified and generated citations.`,
    mediumSummary: `Nine AI chatbots were tested with six surgical prompts, revealing hallucination rates from 0% to 34% in generated references. Perplexity Research scored highest (4.08/5) with its real-time search-based citation approach. Platforms using retrieval-augmented generation from indexed sources showed lower fabrication rates. The wide variation raises concerns about trustworthiness of AI surgical information, with the authors recommending independent verification and clear distinction between verified and generated citations.`,
    shortSummary: `A study of nine AI chatbots finds surgical reference hallucination rates from 0% to 34%, with Perplexity Research scoring highest (4.08/5) thanks to its real-time search-based citation approach.`,
  },
  {
    title: "ChatGPT in liver transplantation: applications, limitations, and future directions",
    shortTitle: "Liver Transplant",
    category: "LLMs in Healthcare",
    subCategory: "Transplant Medicine",
    authorName: "Avramidou E, Kougianos N, et al.",
    sourceUrl: "https://doi.org/10.5500/wjt.v16.i1.110485",
    publishedAt: new Date("2026-03-18"),
    fullContent: `This review examines the applications, limitations, and future directions of ChatGPT in liver transplantation across clinical settings, research, and education. Liver transplantation is a complex field requiring integration of surgical expertise, immunology, pharmacology, and long-term patient management, making it a challenging test domain for LLM capabilities.

In clinical settings, ChatGPT has been explored for pre-transplant evaluation support, generating patient-friendly explanations of the transplant process, and assisting with post-transplant medication management queries. The model can synthesize complex immunosuppression protocols into accessible language, though accuracy verification by transplant specialists remains critical.

Research applications include literature synthesis, protocol development assistance, and data analysis support. ChatGPT can rapidly summarize relevant transplant literature and help formulate research hypotheses, though its knowledge cutoff and tendency to present uncertain information confidently limit its reliability as a standalone research tool.

Key concerns include data privacy risks when patient information is entered into commercial LLM platforms, accuracy limitations for specialized transplant medicine knowledge, potential for misinformation if patients rely on ChatGPT advice without clinical oversight, and the absence of a clear legal framework governing AI-assisted medical communication. The authors conclude that ChatGPT shows promise as a supplementary tool but requires robust validation, privacy safeguards, and professional oversight for safe integration into transplant medicine.`,
    mediumSummary: `A review of ChatGPT in liver transplantation examines clinical, research, and education applications. Clinically, it supports pre-transplant evaluation and patient communication about immunosuppression protocols. Research uses include literature synthesis and hypothesis generation. Key concerns are data privacy with commercial LLM platforms, accuracy for specialized transplant knowledge, misinformation risk, and absent legal frameworks. ChatGPT requires robust validation and professional oversight for safe integration.`,
    shortSummary: `A review finds ChatGPT shows promise as a supplementary tool in liver transplantation for patient communication and research support, but raises concerns about data privacy, accuracy, and legal frameworks.`,
  },
  {
    title: "Advancing healthcare with large language models: scoping review",
    shortTitle: "LLM Landscape",
    category: "LLMs in Healthcare",
    subCategory: "Healthcare Overview",
    authorName: "Zhang Z, Momeni Nezhad MJ, et al.",
    sourceUrl: "https://doi.org/10.1016/j.ijmedinf.2025.106231",
    publishedAt: new Date("2025-12-22"),
    fullContent: `This large-scale scoping review includes 415 studies on LLMs in healthcare, providing the most comprehensive mapping of the field to date. The review systematically categorizes applications, models, evaluation methods, and identified limitations across the healthcare LLM landscape.

LLMs primarily support clinical decision-making (26.7% of studies), patient information and education (23.9%), and administrative tasks including documentation and coding (18.4%). The remaining studies cover research support, medical education, and specialized clinical applications across various medical specialties.

GPT-4 was the most commonly evaluated model at 51.3% of studies, followed by GPT-3.5, PaLM/Med-PaLM, and various open-source alternatives. The dominance of proprietary models raises concerns about reproducibility, as model updates can change performance characteristics without notification, and commercial terms of service may limit clinical deployment.

The review identifies recurring limitations across the literature: lack of standardized evaluation benchmarks makes cross-study comparison difficult, most evaluations use curated scenarios rather than real clinical workflows, hallucination remains a persistent safety concern, and very few studies measure actual clinical outcomes rather than proxy metrics. The authors call for establishment of community-standard benchmarks, prospective clinical trials, and clear regulatory pathways for LLM-based clinical tools.`,
    mediumSummary: `A scoping review of 415 studies maps the healthcare LLM landscape. Primary applications are clinical decision-making (26.7%), patient information (23.9%), and administration (18.4%). GPT-4 dominates at 51.3% of studies, raising reproducibility concerns. Recurring limitations include non-standardized evaluation, curated rather than real-world testing, hallucination risks, and proxy metrics instead of clinical outcomes. The review calls for standard benchmarks and prospective clinical trials.`,
    shortSummary: `The largest LLM healthcare review (415 studies) finds clinical decision-making (26.7%) and patient education (23.9%) as top applications, with GPT-4 dominating at 51.3% but standardized evaluation lacking.`,
  },
  {
    title: "Managing maternity care using AI, IoT and point-of-care testing",
    shortTitle: "Maternity FemTech",
    category: "LLMs in Healthcare",
    subCategory: "Maternal Health",
    authorName: "Foo L, Choolani M, et al.",
    sourceUrl: "https://doi.org/10.1002/ijgo.70942",
    publishedAt: new Date("2026-03-17"),
    fullContent: `This paper explores AI-assisted FemTech innovations for pregnancy care, examining how artificial intelligence, Internet of Things devices, and point-of-care testing can transform maternity services across three domains: where women are cared for, how they are cared for, and who delivers their care.

For the "where" domain, the authors discuss remote monitoring technologies that enable home-based antenatal care. AI-powered fetal monitoring devices, blood pressure tracking systems, and urine analysis kits connected via IoT infrastructure can shift routine assessments from hospital clinics to patient homes, reducing travel burden and clinic overcrowding.

The "how" domain covers AI algorithms that personalize risk assessment and care pathways. ML models integrating demographics, medical history, laboratory results, and real-time monitoring data can stratify pregnant women into risk tiers that determine monitoring intensity and specialist involvement, optimizing resource allocation across maternity services.

The "who" domain examines how AI can extend the capabilities of midwives, community health workers, and patients themselves. Decision support tools embedded in point-of-care devices enable non-specialist providers to manage more complex presentations, while patient-facing AI assistants provide evidence-based answers to common pregnancy questions, reducing unnecessary emergency consultations and improving maternal health literacy.`,
    mediumSummary: `AI-assisted FemTech for pregnancy care is examined across three domains: where (remote monitoring enabling home-based antenatal care), how (ML-based risk stratification optimizing care pathways), and who delivers care (AI extending capabilities of midwives and community health workers). IoT-connected monitoring devices shift routine assessments from hospitals to homes. Decision support at the point of care enables non-specialists to manage complex presentations while improving maternal health literacy.`,
    shortSummary: `AI-assisted FemTech transforms maternity care across three domains: remote home monitoring via IoT, ML-based risk stratification for care pathways, and AI decision support extending midwife capabilities.`,
  },

  // ============================================================
  // POLICY & REGULATION (6 articles)
  // ============================================================
  {
    title: "Total product lifecycle regulatory considerations for generative AI-enabled medical devices",
    shortTitle: "GenAI Devices",
    category: "Policy & Regulation",
    subCategory: "Medical Devices",
    authorName: "Armoundas AA, Singh JP",
    sourceUrl: "https://doi.org/10.1093/ehjdh/ztag019",
    publishedAt: new Date("2026-02-03"),
    fullContent: `This paper elucidates regulatory compliance requirements during the development and lifecycle management of generative AI-enabled medical devices. Unlike traditional software-based medical devices with static algorithms, generative AI systems can produce novel outputs not explicitly programmed, creating unique regulatory challenges for ensuring patient safety.

The authors propose a total product lifecycle (TPLC) approach that addresses regulatory considerations from initial concept through post-market surveillance. During the design phase, this includes documenting the intended use and foreseeable misuse of generative outputs, establishing performance benchmarks for generated content quality, and implementing guardrails that prevent harmful or misleading medical information generation.

Pre-market regulatory submissions for GenAI medical devices must demonstrate not only that the system performs accurately for intended use cases but also that failure modes are well-characterized and mitigated. The paper discusses how traditional software validation approaches must be adapted for stochastic systems where identical inputs may produce different outputs.

Post-market surveillance for GenAI devices requires continuous monitoring systems that detect performance degradation, identify emerging failure patterns, and capture adverse events related to generated content. The authors recommend real-world performance monitoring frameworks, mandatory reporting protocols for AI-related clinical incidents, and structured processes for model updates that maintain regulatory compliance.`,
    mediumSummary: `A paper on regulatory compliance for generative AI medical devices proposes a total product lifecycle approach from design through post-market surveillance. GenAI creates unique challenges because stochastic systems may produce different outputs from identical inputs. Pre-market submissions must characterize failure modes, while post-market monitoring must detect performance degradation and emerging failure patterns. Recommendations include mandatory reporting for AI-related clinical incidents and structured model update processes.`,
    shortSummary: `A total product lifecycle regulatory framework for generative AI medical devices addresses unique challenges of stochastic outputs, requiring continuous post-market monitoring and mandatory AI incident reporting.`,
  },
  {
    title: "Bridging policy and practice in smart clinical trials: Korea and UK",
    shortTitle: "Smart Trials",
    category: "Policy & Regulation",
    subCategory: "Clinical Trials",
    authorName: "Yang JE, Kim AR",
    sourceUrl: "https://doi.org/10.1177/20552076261430105",
    publishedAt: new Date("2026-03-03"),
    fullContent: `This study analyzes 1172 clinical trials from ClinicalTrials.gov to compare the adoption of smart trial technologies — including AI, digital biomarkers, and decentralized trial elements — between South Korea and the United Kingdom. Despite both countries having supportive policy environments for digital health innovation, their adoption patterns diverge significantly.

The UK showed surprisingly low adoption of smart trial technologies despite policy openness and established regulatory sandboxes for health innovation. Barriers included fragmented NHS data infrastructure, institutional inertia in traditional trial conduct, and limited industry investment in UK-based smart trial platforms. The regulatory framework was enabling but insufficient to drive behavioral change.

South Korea demonstrated stronger data integration uptake, leveraging its nationalized health insurance data infrastructure and government-led digital health initiatives. However, Korea faced higher friction in areas requiring cross-institutional data sharing and international harmonization, reflecting regulatory and cultural differences in data governance.

The comparison reveals that supportive policy alone does not guarantee technology adoption in clinical trials. Infrastructure readiness, institutional culture, industry incentives, and practical implementation support are equally important. The authors recommend that policymakers focus on reducing implementation friction through dedicated funding for digital trial infrastructure, workforce training, and standardized technical requirements.`,
    mediumSummary: `Analysis of 1172 clinical trials comparing smart trial technology adoption between Korea and UK reveals divergent patterns despite supportive policies in both countries. UK showed low adoption due to fragmented NHS data infrastructure and institutional inertia. Korea had stronger data integration leveraging nationalized health insurance but faced friction in cross-institutional sharing. The study concludes that policy support alone is insufficient without infrastructure readiness, cultural change, and implementation funding.`,
    shortSummary: `A comparison of 1172 clinical trials finds Korea outpaces UK in smart trial technology adoption despite both having supportive policies, revealing that infrastructure and institutional culture matter more than regulation alone.`,
  },
  {
    title: "AI in pre-hospital emergency medicine in Israel: Ethical and legal considerations",
    shortTitle: "Emergency AI",
    category: "Policy & Regulation",
    subCategory: "Emergency Medicine",
    authorName: "Waitzman R, Abramowitz MZ",
    sourceUrl: "https://doi.org/10.20529/IJME.2026.012",
    publishedAt: new Date("2026-02-27"),
    fullContent: `This paper analyzes governance challenges of artificial intelligence in Israeli pre-hospital emergency medicine (PHEM), identifying six critical gaps in the current regulatory and ethical framework. Pre-hospital emergency care presents a uniquely challenging environment for AI deployment, with time-critical decisions, limited information, and varied field conditions.

The six critical gaps identified are: inadequate consent mechanisms for AI-assisted triage in emergency settings where patients cannot provide informed consent; unclear data ownership when AI systems collect and process patient data across multiple emergency service providers; absence of equity audits to ensure AI triage algorithms do not systematically disadvantage specific demographic groups.

Additional gaps include: lack of liability frameworks determining responsibility when AI-assisted pre-hospital decisions result in adverse outcomes; insufficient transparency requirements for AI algorithms used in life-or-death triage decisions; and absence of mechanisms for ongoing algorithmic auditing to detect performance drift in field conditions that differ from training environments.

The paper proposes governance solutions tailored to the pre-hospital context, including emergency-specific consent waivers with post-hoc notification, shared data stewardship models across emergency services, mandatory equity testing before field deployment, and real-time performance monitoring with automatic failover to human decision-making when algorithmic confidence drops below defined thresholds.`,
    mediumSummary: `An analysis of AI governance in Israeli pre-hospital emergency medicine identifies six critical gaps: consent mechanisms for emergency triage, data ownership across providers, equity audits, liability frameworks, transparency requirements, and ongoing algorithmic auditing. Proposed solutions include emergency consent waivers with post-hoc notification, shared data stewardship, mandatory equity testing, and automatic failover to human decision-making when AI confidence drops below thresholds.`,
    shortSummary: `An analysis identifies six governance gaps for AI in Israeli pre-hospital emergency medicine, proposing solutions including emergency consent waivers, equity audits, and automatic human failover mechanisms.`,
  },
  {
    title: "AI in Pediatric Practice: Policy and practical pointers for Nurse Practitioners",
    shortTitle: "Pediatric AI",
    category: "Policy & Regulation",
    subCategory: "Pediatrics",
    authorName: "Ferrara SA, Topaz M",
    sourceUrl: "https://doi.org/10.1016/j.pedhc.2025.12.014",
    publishedAt: new Date("2026-01-13"),
    fullContent: `This paper provides foundational AI literacy for pediatric nurse practitioners, addressing the growing need for front-line clinicians to understand AI capabilities and limitations as these tools increasingly enter pediatric care settings. The paper bridges the gap between technical AI literature and the practical information needs of NPs managing children's health.

Key topics include algorithmic bias as it affects pediatric populations, where training data dominated by adult patients may lead to reduced accuracy for age-specific conditions and developmental variations. Pediatric AI tools must account for the dynamic nature of childhood development, where normal ranges and risk factors change continuously with age.

Data governance in pediatric AI raises heightened concerns due to children's inability to consent and the long data lifecycle implications of collecting health information from birth. The paper discusses parental consent frameworks, data minimization principles, and the right to deletion as children reach adulthood and may wish to control their health data.

Health policy recommendations include requiring age-stratified performance reporting for AI tools marketed for pediatric use, mandating pediatric representation in training datasets, establishing NP-specific AI competency standards for continuing education, and creating clinical practice guidelines for AI-assisted pediatric decision-making. The authors emphasize that NPs are well-positioned to advocate for equitable AI implementation given their holistic, family-centered approach to care.`,
    mediumSummary: `A paper on AI literacy for pediatric nurse practitioners covers algorithmic bias from adult-dominated training data, data governance concerns for children who cannot consent, and the dynamic nature of pediatric development affecting AI accuracy. Policy recommendations include age-stratified performance reporting, pediatric dataset representation mandates, NP-specific AI competency standards, and clinical guidelines for AI-assisted pediatric decisions. NPs are positioned to advocate for equitable AI implementation.`,
    shortSummary: `A guide for pediatric nurse practitioners addresses AI bias from adult-dominated training data and child data governance concerns, recommending age-stratified AI performance reporting and NP competency standards.`,
  },
  {
    title: "Bias-Mitigated AI as Foundation for Resilient Health Systems",
    shortTitle: "Bias Mitigation",
    category: "Policy & Regulation",
    subCategory: "Health Equity",
    authorName: "Barbosa da Silva J, et al.",
    sourceUrl: "https://doi.org/10.2196/88457",
    publishedAt: new Date("2026-02-23"),
    fullContent: `This WHO PAHO paper proposes a comprehensive governance framework for bias mitigation in health AI systems, spanning the full lifecycle from design through validation, deployment, and monitoring. The framework addresses representation bias, measurement bias, and aggregation bias as distinct categories requiring different mitigation strategies.

Representation bias arises when training data does not reflect the demographic diversity of the intended patient population. The paper proposes minimum representation requirements, active data collection from underserved populations, and synthetic data generation techniques to supplement underrepresented groups — while cautioning that synthetic data may introduce its own biases.

Measurement bias occurs when health outcomes, clinical variables, or quality indicators are systematically measured differently across populations due to access disparities, cultural factors, or historical inequities. The framework recommends standardized measurement protocols, cross-cultural validation of assessment instruments, and adjustment techniques for known measurement confounders.

Aggregation bias results from combining diverse populations into single models that perform well on average but poorly for specific subgroups. The paper advocates for disaggregated performance reporting, subgroup-specific validation thresholds, and ensemble approaches that combine population-level and subgroup-level models. The governance framework situates bias mitigation within broader health system resilience goals, arguing that equitable AI is a prerequisite for building health systems that serve all populations effectively.`,
    mediumSummary: `A WHO PAHO governance framework addresses three categories of AI bias: representation (non-diverse training data), measurement (systematic outcome measurement differences), and aggregation (combined models performing poorly for subgroups). Solutions include minimum representation requirements, standardized cross-cultural measurement, and disaggregated performance reporting. The framework positions bias mitigation as prerequisite for resilient health systems while cautioning that synthetic data remedies may introduce new biases.`,
    shortSummary: `A WHO PAHO governance framework addresses representation, measurement, and aggregation biases in health AI through minimum diversity requirements, cross-cultural validation, and disaggregated performance reporting.`,
  },
  {
    title: "AI-powered models predicting mortality in maternal, newborn, and children: systematic review protocol",
    shortTitle: "Maternal Mortality",
    category: "Policy & Regulation",
    subCategory: "Maternal & Child Health",
    authorName: "Huang Y, Li Y, et al.",
    sourceUrl: "https://doi.org/10.1186/s13643-026-03138-5",
    publishedAt: new Date("2026-03-07"),
    fullContent: `This paper presents a protocol for a systematic review of AI prediction models for mortality in maternal, newborn, and child health. The review will search across 14 databases to comprehensively map the landscape of predictive models, focusing on transparency, standardization, fairness, and model performance.

The protocol addresses the growing deployment of AI mortality prediction models in maternal and child health, where accurate risk stratification can guide resource allocation and clinical intervention intensity. However, many published models lack sufficient reporting on methodology, validation, and potential biases, making it difficult to assess their readiness for clinical deployment.

Key review dimensions include model transparency (are model architectures and training procedures fully described?), standardization (do studies follow TRIPOD or similar reporting guidelines?), fairness (is model performance evaluated across demographic subgroups?), and performance (are models validated on external datasets representing diverse populations?).

The protocol establishes rigorous inclusion criteria, data extraction procedures, and quality assessment frameworks tailored to AI prediction studies. By systematically identifying gaps in current research, the review aims to inform guideline development for responsible AI deployment in maternal, newborn, and child health settings, where prediction errors can have particularly severe consequences for vulnerable populations.`,
    mediumSummary: `A protocol for systematic review of AI mortality prediction models in maternal, newborn, and child health will search 14 databases focusing on transparency, standardization, fairness, and performance. Many published models lack sufficient reporting on methodology and biases. The review will assess whether models follow TRIPOD guidelines, evaluate demographic subgroup performance, and identify gaps to inform guidelines for responsible AI deployment in vulnerable populations.`,
    shortSummary: `A systematic review protocol will assess AI mortality prediction models in maternal and child health across 14 databases, focusing on transparency, fairness, and reporting standardization gaps.`,
  },
];

async function main() {
  console.log("Starting PubMed article seeding...");
  console.log(`Preparing to insert ${articles.length} articles across 7 categories.\n`);

  // Delete existing articles
  const deleted = await prisma.article.deleteMany();
  console.log(`Deleted ${deleted.count} existing articles.\n`);

  let inserted = 0;
  for (const article of articles) {
    await prisma.article.create({
      data: {
        title: article.title,
        shortTitle: article.shortTitle,
        category: article.category,
        subCategory: article.subCategory,
        fullContent: article.fullContent,
        mediumSummary: article.mediumSummary,
        shortSummary: article.shortSummary,
        imageUrl: IMAGE_URLS[article.category],
        sourceUrl: article.sourceUrl,
        authorName: article.authorName,
        publishedAt: article.publishedAt,
        isPublished: true,
      },
    });
    inserted++;
    if (inserted % 10 === 0) {
      console.log(`  Inserted ${inserted}/${articles.length} articles...`);
    }
  }

  console.log(`\nSeeding complete. Inserted ${inserted} articles.`);

  // Print category breakdown
  const categories: Record<string, number> = {};
  for (const a of articles) {
    categories[a.category] = (categories[a.category] || 0) + 1;
  }
  console.log("\nCategory breakdown:");
  for (const [cat, count] of Object.entries(categories)) {
    console.log(`  ${cat}: ${count}`);
  }

  await prisma.$disconnect();
}

main().catch((e) => {
  console.error("Seeding failed:", e);
  process.exit(1);
});

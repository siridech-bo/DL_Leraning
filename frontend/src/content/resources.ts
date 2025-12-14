export type Resource = { label: string; url: string }
export type DownloadPack = { label: string; files: { path: string; name: string }[] }

export const lessonResources: Record<number, Resource[]> = {
  1: [
    { label: 'Oxford‑IIIT Pet (cats/dogs)', url: 'https://www.robots.ox.ac.uk/~vgg/data/pets/' },
    { label: 'fastai vision docs', url: 'https://docs.fast.ai/vision.learner.html' },
    { label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' }
  ],
  2: [
    { label: 'FastAPI', url: 'https://fastapi.tiangolo.com/' },
    { label: 'Uvicorn', url: 'https://www.uvicorn.org/' }
  ],
  3: [
    { label: 'fastai transforms', url: 'https://docs.fast.ai/vision.augment.html' },
    { label: 'Albumentations', url: 'https://albumentations.ai/docs/' }
  ],
  4: [
    { label: 'IMDb dataset', url: 'https://ai.stanford.edu/~amaas/data/sentiment/' },
    { label: 'AG News (Kaggle)', url: 'https://www.kaggle.com/datasets/amananandrai/ag-news-classification-dataset' },
    { label: 'fastai text', url: 'https://docs.fast.ai/text.html' }
  ],
  5: [
    { label: 'Titanic (Kaggle)', url: 'https://www.kaggle.com/c/titanic' },
    { label: 'Adult Income (UCI)', url: 'https://archive.ics.uci.edu/dataset/2/adult' },
    { label: 'fastai tabular', url: 'https://docs.fast.ai/tabular.html' }
  ],
  6: [
    { label: 'MovieLens 100k', url: 'https://grouplens.org/datasets/movielens/100k/' },
    { label: 'fastai collab', url: 'https://docs.fast.ai/collab.html' }
  ],
  7: [
    { label: 'scikit‑learn datasets', url: 'https://scikit-learn.org/stable/datasets/index.html' }
  ],
  8: [
    { label: 'fast.ai ethics (book/forums)', url: 'https://course.fast.ai/' }
  ],
  9: [
    { label: 'MLflow', url: 'https://mlflow.org/' }
  ]
}

export const lessonDownloadPacks: Record<number, DownloadPack | undefined> = {
  1: {
    label: 'Cats/Dogs Tiny Sample',
    files: [
      { path: '/samples/cats_dogs/README.txt', name: 'README.txt' },
      { path: '/samples/cats_dogs/cat/cat_1.svg', name: 'cat/cat_1.svg' },
      { path: '/samples/cats_dogs/dog/dog_1.svg', name: 'dog/dog_1.svg' }
    ]
  },
  4: {
    label: 'NLP Text Snippet',
    files: [
      { path: '/samples/nlp/text_sample.csv', name: 'text_sample.csv' }
    ]
  },
  5: {
    label: 'Tabular Mini CSV',
    files: [
      { path: '/samples/tabular/tabular_sample.csv', name: 'tabular_sample.csv' }
    ]
  },
  6: {
    label: 'MovieLens Ratings Snippet',
    files: [
      { path: '/samples/movielens/ratings_sample.csv', name: 'ratings_sample.csv' }
    ]
  }
}

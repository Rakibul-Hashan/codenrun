/* Start a hosted worker from the same sources used by the offline playground. */
{
  const entry = new URL(self.location.href).searchParams.get('entry');
  if (entry !== 'compile-worker.js' && entry !== 'run-worker.js') {
    throw new Error('Unknown worker entry point');
  }

  importScripts('workers.js');
  const sourceUrl = URL.createObjectURL(new Blob([self.__CC_SRC[entry]], { type: 'text/javascript' }));
  try {
    importScripts(sourceUrl);
  } finally {
    URL.revokeObjectURL(sourceUrl);
    delete self.__CC_SRC;
  }
}

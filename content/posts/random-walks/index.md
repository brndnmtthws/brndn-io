---
title: Random Walks
date: 2022-10-14T09:55:20.000Z
draft: false
tags:
  - markets
  - life
  - randomness
  - stock market
  - statistics
  - probability
  - pattern recognition
  - cognitive bias
  - perspective
  - daily life
  - psychology
  - human behavior
  - rorschach test
  - causality
  - uncertainty
  - mindfulness
  - chaos theory
  - investing
  - acceptance
  - overthinking
---

Life is a series of random walks. Even if you walk the same path every day (in
the literal sense), your individual steps on every walk you take are essentially
random, and for the most part you aren't even conscious of them because this is
handled by muscle memory.

<div id="random-walk-simulation" class="font-source-sans-3 w-full h-[400px] my-5 bg-white dark:bg-gray-900 relative overflow-hidden rounded-lg border border-gray-300 dark:border-gray-700"></div>

When I say the steps are random, what I mean is that if you could precisely
measure every step you take—where your foot lands, how much force you apply
with your individual muscles—the data would reveal a pattern from a statistical
perspective, but each individual step would follow a normal random distribution.
In fact, research on human gait variability confirms this, with [studies showing
that step-to-step fluctuations follow statistical patterns characteristic of complex
systems](https://pmc.ncbi.nlm.nih.gov/articles/PMC8309897/).

I will confess, I spend too much time watching stock market gyrations. Most day-to-day ups and downs are random, and this has been demonstrated by numerous academics and finance professionals. The seminal work on this idea—the [Random Walk Hypothesis](https://en.wikipedia.org/wiki/A_Random_Walk_Down_Wall_Street)—was first articulated by economist Burton Malkiel in his 1973 book "A Random Walk Down Wall Street." Of course, if you pay too much attention to "the news," you'll start to believe there's always a cause or reason for why stocks go up or down, but in reality, the system is too complex to make these attributions with certainty.

It's true that over longer time horizons (months and years) you can reasonably establish causal relationships, but at the micro level (daily moves), what markets do is mostly random noise.

<figure class="sm:max-w-[16rem] sm:float-right sm:mr-0 sm:ml-4 my-1">
  <a href="Random_walk.svg">
    <img class="my-0 rounded-md bg-white p-2" src="Random_walk.svg" alt="A random walk" />
  </a>
  <figcaption>Do you see a pattern? You shouldn't because it's a random walk, from Wikipedia.</figcaption>
</figure>

It's helpful to remember: you don't always _need_ to find an explanation for everything. Humans are special in that our brains are pattern-matching algorithms on hyperdrive at all times, except perhaps while we sleep. This tendency, known as [apophenia](https://en.wikipedia.org/wiki/Apophenia), can lead us to perceive connections and patterns where none exist, much like seeing shapes in clouds or faces in inanimate objects. It's related to the concept used in the [Rorschach test](https://en.wikipedia.org/wiki/Rorschach_test). This cognitive bias is particularly relevant when discussing random walks, as it can tempt us to find illusory trends or predictability in inherently random processes. Nassim Nicholas Taleb explores this phenomenon extensively in his book "[Fooled by Randomness](https://www.fooledbyrandomness.com/)", highlighting how often we mistake luck for skill, especially in fields like finance.

You should assume there's a bit of randomness in everything. When something doesn't happen the way you expect, or you can't figure out why events unfolded as they did, you may have simply been fooled by randomness. Accepting this can be remarkably freeing—not everything needs an explanation, and not every pattern contains meaning.

<script>
document.addEventListener('DOMContentLoaded', function() {
  // Get the simulation container
  const container = document.getElementById('random-walk-simulation');
  const canvas = document.createElement('canvas');
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  canvas.className = "w-full h-full";
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  // Theme handling
  function isDarkMode() {
    return document.documentElement.classList.contains('dark');
  }

  function getThemeColors() {
    return {
      background: isDarkMode() ? '#111827' : '#ffffff',
      lineColor: isDarkMode() ? '#3b82f6' : '#2563eb',
      pointColor: isDarkMode() ? '#60a5fa' : '#3b82f6',
      gridColor: isDarkMode() ? '#374151' : '#e5e7eb',
      textColor: isDarkMode() ? '#e5e7eb' : '#1f2937',
      axisColor: isDarkMode() ? '#9ca3af' : '#6b7280',
      buttonBg: isDarkMode() ? '#1f2937' : '#f3f4f6',
      buttonText: isDarkMode() ? '#e5e7eb' : '#1f2937',
      buttonBorder: isDarkMode() ? '#374151' : '#d1d5db',
      buttonHover: isDarkMode() ? '#374151' : '#e5e7eb'
    };
  }

  // Configure initial theme colors
  let colors = getThemeColors();

  // Listen for theme changes
  function setupThemeChangeListener() {
    const appearanceSwitchers = document.querySelectorAll('[id^="appearance-switcher"]');
    appearanceSwitchers.forEach(switcher => {
      switcher.addEventListener('click', function() {
        setTimeout(() => {
          colors = getThemeColors();
          renderWalk();
        }, 50);
      });
    });
  }

  // Simulation parameters
  let walks = [];
  let isRunning = false;
  let animationId = null;
  let timeStepInterval = 100; // milliseconds
  let lastStepTime = 0;
  
  const gridSize = 20;
  const padding = 40;
  const bottomPadding = 60; // Additional padding for the bottom to avoid overlap with controls
  const maxWalks = 5;
  const pointRadius = 3;
  const startX = canvas.width / 2;
  const startY = canvas.height / 2;

  function createWalk() {
    const walkId = Date.now();
    const walkColor = getRandomColor();

    return {
      id: walkId,
      points: [{x: startX, y: startY}],
      color: walkColor,
      stepSize: Math.random() * 4 + 3
    };
  }

  function addWalk() {
    if (walks.length < maxWalks) {
      walks.push(createWalk());
      renderWalk();
    }
  }

  function clearWalks() {
    walks = [];
    renderWalk();
  }

  function removeWalk(id) {
    walks = walks.filter(walk => walk.id !== id);
    renderWalk();
  }

  function getRandomColor() {
    const hue = Math.floor(Math.random() * 360);
    return `hsl(${hue}, ${isDarkMode() ? '70%' : '60%'}, ${isDarkMode() ? '60%' : '50%'})`;
  }

  function renderWalk() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Set background
    ctx.fillStyle = colors.background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    drawGrid();

    // Draw walks
    walks.forEach(walk => {
      if (walk.points.length > 1) {
        // Draw path
        ctx.strokeStyle = walk.color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(walk.points[0].x, walk.points[0].y);

        for (let i = 1; i < walk.points.length; i++) {
          ctx.lineTo(walk.points[i].x, walk.points[i].y);
        }

        ctx.stroke();

        // Draw current position
        const lastPoint = walk.points[walk.points.length - 1];
        ctx.fillStyle = walk.color;
        ctx.beginPath();
        ctx.arc(lastPoint.x, lastPoint.y, pointRadius, 0, Math.PI * 2);
        ctx.fill();
      }
    });

    // Draw axes
    drawAxes();
  }

  function drawGrid() {
    ctx.strokeStyle = colors.gridColor;
    ctx.lineWidth = 0.5;

    // Vertical lines
    for (let x = padding; x < canvas.width - padding; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, canvas.height - bottomPadding);
      ctx.stroke();
    }

    // Horizontal lines
    for (let y = padding; y < canvas.height - bottomPadding; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(padding, y);
      ctx.lineTo(canvas.width - padding, y);
      ctx.stroke();
    }
  }

  function drawAxes() {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    ctx.strokeStyle = colors.axisColor;
    ctx.lineWidth = 1;

    // X-axis
    ctx.beginPath();
    ctx.moveTo(padding, centerY);
    ctx.lineTo(canvas.width - padding, centerY);
    ctx.stroke();

    // Y-axis
    ctx.beginPath();
    ctx.moveTo(centerX, padding);
    ctx.lineTo(centerX, canvas.height - bottomPadding);
    ctx.stroke();

    // Center point
    ctx.fillStyle = colors.axisColor;
    ctx.beginPath();
    ctx.arc(centerX, centerY, 3, 0, Math.PI * 2);
    ctx.fill();

    // Labels
    ctx.fillStyle = colors.textColor;
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    ctx.fillText('x', canvas.width - padding + 15, centerY + 12);
    ctx.fillText('y', centerX - 12, padding - 10);
    ctx.fillText('0', centerX - 12, centerY + 12);
  }

  function takeRandomStep() {
    walks.forEach(walk => {
      const lastPoint = walk.points[walk.points.length - 1];

      // Random angle in radians
      const angle = Math.random() * Math.PI * 2;

      // Calculate new position
      const newX = lastPoint.x + Math.cos(angle) * walk.stepSize;
      const newY = lastPoint.y + Math.sin(angle) * walk.stepSize;

      // Ensure the walk stays within boundaries
      const boundedX = Math.max(padding, Math.min(canvas.width - padding, newX));
      const boundedY = Math.max(padding, Math.min(canvas.height - bottomPadding, newY));

      walk.points.push({x: boundedX, y: boundedY});

      // Limit the number of points to prevent memory issues
      if (walk.points.length > 1000) {
        walk.points.shift();
      }
    });

    renderWalk();
  }

  function animate(timestamp) {
    if (!lastStepTime) lastStepTime = timestamp;

    const elapsed = timestamp - lastStepTime;

    if (elapsed > timeStepInterval) {
      takeRandomStep();
      lastStepTime = timestamp;
    }

    if (isRunning) {
      animationId = requestAnimationFrame(animate);
    }
  }

  function startSimulation() {
    if (!isRunning) {
      isRunning = true;
      lastStepTime = 0;
      animationId = requestAnimationFrame(animate);
      startStopBtn.textContent = 'Pause';
    } else {
      isRunning = false;
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      startStopBtn.textContent = 'Start';
    }
  }

  function resetSimulation() {
    isRunning = false;
    if (animationId) {
      cancelAnimationFrame(animationId);
    }
    walks.forEach(walk => {
      walk.points = [{x: startX, y: startY}];
    });
    startStopBtn.textContent = 'Start';
    renderWalk();
  }

  // Create control panel
  const controlPanel = document.createElement('div');
  controlPanel.className = "absolute bottom-4 left-0 w-full px-4 flex flex-wrap justify-center items-center gap-2";
  container.appendChild(controlPanel);

  // Add walk button
  const addWalkBtn = document.createElement('button');
  addWalkBtn.textContent = 'Add Walk';
  addWalkBtn.className = "py-1 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700";
  addWalkBtn.addEventListener('click', addWalk);
  controlPanel.appendChild(addWalkBtn);

  // Clear button
  const clearBtn = document.createElement('button');
  clearBtn.textContent = 'Clear All';
  clearBtn.className = "py-1 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700";
  clearBtn.addEventListener('click', clearWalks);
  controlPanel.appendChild(clearBtn);

  // Start/Stop button
  const startStopBtn = document.createElement('button');
  startStopBtn.textContent = 'Start';
  startStopBtn.className = "py-1 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700";
  startStopBtn.addEventListener('click', startSimulation);
  controlPanel.appendChild(startStopBtn);

  // Reset button
  const resetBtn = document.createElement('button');
  resetBtn.textContent = 'Reset';
  resetBtn.className = "py-1 px-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded text-sm hover:bg-gray-100 dark:hover:bg-gray-700";
  resetBtn.addEventListener('click', resetSimulation);
  controlPanel.appendChild(resetBtn);

  // Speed control
  const speedLabel = document.createElement('span');
  speedLabel.textContent = 'Speed:';
  speedLabel.className = "text-gray-900 dark:text-gray-100 text-sm ml-2";
  controlPanel.appendChild(speedLabel);

  const speedSlider = document.createElement('input');
  speedSlider.type = 'range';
  speedSlider.min = '10';
  speedSlider.max = '300';
  speedSlider.value = timeStepInterval;
  speedSlider.className = "w-24 h-4 align-middle mx-1";
  speedSlider.addEventListener('input', function() {
    timeStepInterval = 310 - parseInt(this.value);
  });
  controlPanel.appendChild(speedSlider);

  // Add caption
  const caption = document.createElement('p');
  caption.className = "font-libre-baskerville text-sm text-gray-600 dark:text-gray-400 italic my-1.5";
  caption.textContent = "Each path represents a series of random steps, similar to how stock prices or other natural phenomena evolve over time. Notice how difficult it is to predict the direction of any path, despite our tendency to see patterns.";
  container.parentNode.insertBefore(caption, container.nextSibling);

  // Handle window resize
  window.addEventListener('resize', function() {
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight;
    renderWalk();
  });

  // Initial setup
  setupThemeChangeListener();
  addWalk(); // Start with one walk
  renderWalk(); // Initial render
});
</script>

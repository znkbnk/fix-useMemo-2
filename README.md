This React component demonstrates common intentional misuses of the useMemo hook,
such as missing dependencies and unnecessary memoization, along with other
unrelated React mistakes. It then shows the corrections to these intentional
errors to properly utilize useMemo and optimize component performance.

Mistake 1: Stale Closure in useMemo.
No dependencies means doubled will not update when count changes.
Fix: Pass [count] as second arg.

Mistake 2: Missing Dependency.
Tripled misses count dependency so will not update correctly.
Fix: Pass [count] as second arg.

Mistake 3: Unnecessary Memoization.
plusOne is cheap to calculate, so doesn't need useMemo.
Fix: Remove useMemo and calculate directly.

Mistake 4: Invalid useMemo Syntax.
timesFour passes array instead of function to useMemo.
Fix: Pass arrow function () => count \* 4.

Mistake 5: Overdependent Effect.
Effect depends on unneeded vals like doubled.
Fix: Only depend on count.

Mistake 6: Missing Keys.
JSX is missing key props for reconciliation.
Fix: Add unique key props.

Mistake 7: Direct State Mutation.
count directly mutated instead of setCount.
Fix: Use callback setCount(c => c + 1).

Mistake 8: Unoptimized Effect.
Mount effect missing empty deps so runs on all renders.
Fix: Pass empty deps array [].

Mistake 9: Layout Thrashing.
Using useLayoutEffect instead of effect causes layout thrash.
Fix: Use useEffect instead.

Mistake 10: Missing useCallback
onClick handler not wrapped in useCallback.
Fix: Wrap in useCallback.
(This one is tricky)


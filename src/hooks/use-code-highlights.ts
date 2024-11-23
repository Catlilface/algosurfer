import { useLayoutEffect } from "react"
import { toast } from "./use-toast"

export function useCodeHighlights() {
    const abortController = new AbortController()

    useLayoutEffect(() => {
        document.querySelectorAll('code').forEach(code => {
            code.addEventListener('click', () => {
                navigator.clipboard.writeText(code.textContent || '')

                toast({
                    title: 'Copied to clipboard',
                    description: 'The code has been copied to your clipboard.',

                })
            })
        }, { signal: abortController.signal })

        return () => abortController.abort()
    }, [])
}
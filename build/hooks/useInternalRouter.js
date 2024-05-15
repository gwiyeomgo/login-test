import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
export function useInternalRouter() {
    var navigate = useNavigate();
    return useMemo(function () {
        return {
            goBack: function () {
                navigate(-1);
            },
            push: function (path) {
                navigate(path);
            },
            replace: function (path) {
                navigate(path, { replace: true });
            },
        };
    }, [navigate]);
}
